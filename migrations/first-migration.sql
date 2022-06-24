-- noinspection SqlResolveForFile

-- noinspection SyntaxErrorForFile

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: db_for_label; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE db_for_label WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';


ALTER DATABASE db_for_label OWNER TO postgres;

\connect db_for_label

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: roles; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.roles AS ENUM (
    'admin',
    'admin_not_activated',
    'artist'
);


ALTER TYPE public.roles OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: artists; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.artists (
    id_artist_contract integer NOT NULL,
    fk_id_user integer,
    creative_pseudonym character varying(255),
    surname character varying(255),
    name character varying(255),
    patronymic character varying(255),
    document text,
    address text,
    email character varying(255),
    inn character varying(255),
    snils character varying(255),
    bank_details text,
    contract_number character varying(255),
    contract_agreement date,
    contract_fee character varying(255),
    contract_fee_in_words character varying(255),
    contract_expiration_date date,
    deleted boolean DEFAULT false
);


ALTER TABLE public.artists OWNER TO postgres;

--
-- Name: artists_id_artist_contract_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.artists_id_artist_contract_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.artists_id_artist_contract_seq OWNER TO postgres;

--
-- Name: artists_id_artist_contract_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.artists_id_artist_contract_seq OWNED BY public.artists.id_artist_contract;


--
-- Name: tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tokens (
    fk_user_id integer,
    refresh_token text
);


ALTER TABLE public.tokens OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id_user integer NOT NULL,
    email character varying(255),
    password text,
    created_at date DEFAULT now(),
    deleted boolean DEFAULT false,
    role public.roles DEFAULT 'artist'::public.roles
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_user_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_user_seq OWNER TO postgres;

--
-- Name: users_id_user_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_user_seq OWNED BY public.users.id_user;


--
-- Name: artists id_artist_contract; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artists ALTER COLUMN id_artist_contract SET DEFAULT nextval('public.artists_id_artist_contract_seq'::regclass);


--
-- Name: users id_user; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id_user SET DEFAULT nextval('public.users_id_user_seq'::regclass);


--
-- Data for Name: artists; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.artists (id_artist_contract, fk_id_user, creative_pseudonym, surname, name, patronymic, document, address, email, inn, snils, bank_details, contract_number, contract_agreement, contract_fee, contract_fee_in_words, contract_expiration_date, deleted) FROM stdin;
2	4	Sabo	Sabo	1	2	3	4	5	6	7	8	9	2022-06-23	0	123	2022-06-10	f
4	5	text in prop1	Monokle	1	2	3	4	5	6	7	8	9	2022-06-12	0	70 procent	2022-06-09	f
1	2	Volor Flex	Alexander 	Frolov	Alexeseevich	74 50 402342	City Syktyvkar ul Gerov Tankograda	volor@flex.com	967471059784	584964395 34	to phone number 8034523124	DMG 61/21	2022-01-01	65	65 procent	2025-01-01	t
3	3	Blackbird	Blackbird	1	2	3	4	5	6	7	8	9	2022-06-12	0	8	2022-06-12	f
\.


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tokens (fk_user_id, refresh_token) FROM stdin;
5	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyM0BtYWlsLnJ1IiwiaWRfdXNlciI6NSwicm9sZSI6ImFydGlzdCIsImlhdCI6MTY1NTA5OTMxNSwiZXhwIjoxNjU4Njk5MzE1fQ.j5VybT9rqc5YDWDoOmJtqJs4JPPXNfANpRjmhM0aCWI
2	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydGlzdEBnbWFpbC5jb20iLCJpZF91c2VyIjoyLCJyb2xlIjoiYXJ0aXN0IiwiaWF0IjoxNjU1MTIzNTkyLCJleHAiOjE2NTg3MjM1OTJ9.xdUjwbjs6mG39zCN1NV6s-Fi9FpxReSCLk2987H7S34
1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIwQGdtYWlsLmNvbSIsImlkX3VzZXIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1NTEyMzU5OCwiZXhwIjoxNjU4NzIzNTk4fQ.C9J7YJvy4XsEZh0XZk38i2f_IKXho3JTAVyOQEfln8E
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id_user, email, password, createdAt, deleted, role) FROM stdin;
1	iobox420@gmail.com	$2b$04$yi74RiguusW9SqKPZM.ZQOkQi3ANPE8ewZ709kHMrHw4W4FhCQrXC	2022-06-03	f	admin
4	iobox432@gmail.com	$2b$04$yi74RiguusW9SqKPZM.ZQOkQi3ANPE8ewZ709kHMrHw4W4FhCQrXC	2022-06-12	t	artist
3	iobox4233@gmail.com	$2b$04$yi74RiguusW9SqKPZM.ZQOkQi3ANPE8ewZ709kHMrHw4W4FhCQrXC	2022-06-12	f	artist
2	artist@gmail.com	$2b$04$weG1.TrGtlkRi0CCQLSjcudEuPTAF7oARpYf4a60nc23gLdVfqyjK	2022-06-12	t	artist
5	123@mail.ru	$2b$04$yi74RiguusW9SqKPZM.ZQOkQi3ANPE8ewZ709kHMrHw4W4FhCQrXC	2022-06-03	f	artist
\.


--
-- Name: artists_id_artist_contract_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.artists_id_artist_contract_seq', 14, true);


--
-- Name: users_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_user_seq', 27, true);


--
-- Name: artists artists_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_pkey PRIMARY KEY (id_artist_contract);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);


--
-- Name: fk_id_user; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_id_user ON public.artists USING btree (fk_id_user);


--
-- Name: fk_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_user_id ON public.tokens USING btree (fk_user_id);


--
-- Name: artists artists_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_users FOREIGN KEY (fk_id_user) REFERENCES public.users(id_user);


--
-- Name: tokens tokens_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_users FOREIGN KEY (fk_user_id) REFERENCES public.users(id_user);


--
-- PostgreSQL database dump complete
--

