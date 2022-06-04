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
-- Name: roles; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.roles AS ENUM (
    'artist',
    'operator',
    'admin'
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
    name_2 character varying(255),
    name_1 character varying(255),
    name_3 character varying(255),
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
    name_2 character varying(255),
    name_1 character varying(255),
    name_3 character varying(255),
    email character varying(255),
    password text,
    role public.roles,
    created_at timestamp without time zone DEFAULT now(),
    deleted boolean DEFAULT false
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

COPY public.artists (id_artist_contract, fk_id_user, creative_pseudonym, name_2, name_1, name_3, document, address, email, inn, snils, bank_details, contract_number, contract_agreement, contract_fee, contract_fee_in_words, contract_expiration_date, deleted) FROM stdin;
1	2	Volor Flex	Vladimi	Frolov	Alexeseevich	doc data	address	volor@flex.ru	inn number	Snils	bank_details	contract_number	2022-06-03	50	50 procent	2025-06-20	f
3	5	Blackbird	Blackbird	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f
2	4	Sabo	Sabo	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f
4	6	Monokle	Monokle	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f
5	13	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f
6	14	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f
7	15	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f
8	16	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f
\.


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tokens (fk_user_id, refresh_token) FROM stdin;
16	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIyMzI0NTYyMjIyMkBnbWFpbC5jb20iLCJpZF91c2VyIjoxNiwiaWF0IjoxNjU0MzUyMjE0LCJleHAiOjE2NTQzODgyMTR9.h4JdpY9CDRUEFqM4YI30Na3RlXptJ5fSog2mzqxC6DE
1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIwQGdtYWlsLmNvbSIsImlkX3VzZXIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1NDM1MjM0NCwiZXhwIjoxNjU0Mzg4MzQ0fQ.egpFvk5Mn6ubsJs7HQlfOwm3YHIJAUgWb6CSgjve014
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id_user, name_2, name_1, name_3, email, password, role, created_at, deleted) FROM stdin;
1	\N	\N	\N	iobox420@gmail.com	$2b$04$yi74RiguusW9SqKPZM.ZQOkQi3ANPE8ewZ709kHMrHw4W4FhCQrXC	admin	2022-06-03 17:44:41	f
2	\N	\N	\N	iobox423@gmail.com	$2b$04$weG1.TrGtlkRi0CCQLSjcudEuPTAF7oARpYf4a60nc23gLdVfqyjK	artist	2022-06-03 18:58:51	f
4	\N	\N	\N	iobox432@gmail.com	$2b$04$Cdb4eSwcbJ.R2vr6gFDbZuihvigXIRryyME2QSnFNVxPTJnHPK3qS	artist	2022-06-03 19:52:26	f
5	\N	\N	\N	iobox433@gmail.com	$2b$04$hmzFycv4YU3rpomFYP393OJwWVBWPDrkDI18VIBf4dkflcijCp4S.	artist	2022-06-03 19:52:43	f
6	\N	\N	\N	iobox@gmail.com	$2b$04$wZF8acWiGHfXu4Bh/IB24OEN5Sz45R8vGNVi0M8CkB72bBsqkVhNS	artist	2022-06-04 09:49:09	f
14	\N	\N	\N	iobox42345622222@gmail.com	$2b$04$VOgMEIc0RuQ7jzObnGAx5uAeUI1.JjOGN/BbBjP3UbsYue7BgXMpG	artist	2022-06-04 19:03:29.574617	f
15	\N	\N	\N	iobox422345622222@gmail.com	$2b$04$seTgbxW3bP1IUOaVu5tP0ezJVa0Ynvw7K.y7u/GXjHQoB7kcYoMU.	artist	2022-06-04 19:04:45.32834	f
16	\N	\N	\N	iobox4223245622222@gmail.com	$2b$04$fiybMZkMqtoJJxjq74UJoesdSyc5/oJRxymgG6CGiR51d3SonQ/Ke	artist	2022-06-04 19:07:17.542134	f
3	\N	\N	\N	iobox4233@gmail.com	$2b$04$Tct/93zePzKLSsCmxOy.JuJQlNgTSSiL92G8Ai6UKIw9cprJGWI1G	artist	2022-06-04 18:56:56.643745	f
12	\N	\N	\N	iobox423456222@gmail.com	$2b$04$a9cssKNLyHTEBn5mHn8bZ.IlmfEP7F8P.Zkr3wLGO6K925WLfrojC	artist	2022-06-04 19:02:15.126552	f
13	\N	\N	\N	iobox4234562222@gmail.com	$2b$04$btvpA4.jttr/5kMXawrigeZCcsSDkKyazc.bBcQQuWzYFKb97.bmy	artist	2022-06-04 19:02:42.726157	f
10	\N	\N	\N	iobox4234562@gmail.com	$2b$04$GDsToRxwG9HorU9k/mhFs.IJqqhHADKwSdWljr35ieEyb2RfCMTae	artist	2022-06-04 19:00:52.375265	f
11	\N	\N	\N	iobox42345622@gmail.com	$2b$04$IeMrlkTl9NC1SEDOTtq8vuRkuK2VnuSlPjAbcN2n1XdDyC9pIDPWG	artist	2022-06-04 19:01:41.03081	f
8	\N	\N	\N	iobox42345@gmail.com	$2b$04$65EIS47P4WvFQioWeudSl.sHk/Hgc6twpkmH4qvdR1YYjM3QoLBZq	artist	2022-06-04 18:59:17.455704	f
9	\N	\N	\N	iobox423456@gmail.com	$2b$04$KjD9WcA2Aqd2QixiQ0oK.eBggI/ITJwXPTQyj.RBFyUHSYx3wLB8K	artist	2022-06-04 19:00:12.93563	f
7	\N	\N	\N	iobox4234@gmail.com	$2b$04$10Y7Ol70dbAgfKEAE4J1gu6Vwq0awK67wh8qxzhzVK1L5sGXyv3qq	artist	2022-06-04 18:58:46.03937	f
\.


--
-- Name: artists_id_artist_contract_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.artists_id_artist_contract_seq', 8, true);


--
-- Name: users_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_user_seq', 16, true);


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

