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
    'admin',
    'admin_not_activated',
    'artist'
);


ALTER TYPE public.roles OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: acts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.acts (
    id_act integer NOT NULL,
    fk_id_user integer,
    fk_id_artist_contract integer,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now()
);


ALTER TABLE public.acts OWNER TO postgres;

--
-- Name: acts_id_act_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.acts_id_act_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.acts_id_act_seq OWNER TO postgres;

--
-- Name: acts_id_act_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.acts_id_act_seq OWNED BY public.acts.id_act;


--
-- Name: albums; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.albums (
    id_album integer NOT NULL,
    fk_id_user integer,
    fk_id_artist integer,
    name character varying(255),
    cover character varying(255),
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now()
);


ALTER TABLE public.albums OWNER TO postgres;

--
-- Name: albums_id_album_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.albums_id_album_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.albums_id_album_seq OWNER TO postgres;

--
-- Name: albums_id_album_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.albums_id_album_seq OWNED BY public.albums.id_album;


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
    contract_agreement date DEFAULT now(),
    contract_fee character varying(255),
    contract_fee_in_words character varying(255),
    contract_expiration_date date DEFAULT now(),
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
-- Name: releases; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.releases (
    id_release integer NOT NULL,
    fk_id_user integer,
    fk_id_artist integer,
    upc integer,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now(),
    code character varying(255),
    territory character varying(255),
    copyright character varying(255),
    note character varying(255)
);


ALTER TABLE public.releases OWNER TO postgres;

--
-- Name: releases_id_release_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.releases_id_release_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.releases_id_release_seq OWNER TO postgres;

--
-- Name: releases_id_release_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.releases_id_release_seq OWNED BY public.releases.id_release;


--
-- Name: tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tokens (
    fk_user_id integer NOT NULL,
    refresh_token text
);


ALTER TABLE public.tokens OWNER TO postgres;

--
-- Name: tracks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tracks (
    id_track integer NOT NULL,
    fk_id_album integer,
    fk_id_release integer,
    fk_id_act integer,
    fk_id_user integer,
    fk_id_artist integer,
    id_for_dmg character varying(255),
    author_of_music character varying(255),
    author_of_text character varying(255),
    phonogram_timing character varying(255),
    date_of_registration timestamp with time zone,
    share_of_copyright integer,
    share_of_related_rights integer,
    rao boolean DEFAULT false,
    voice boolean DEFAULT false,
    zaicev boolean DEFAULT false,
    mix_upload boolean DEFAULT false,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now()
);


ALTER TABLE public.tracks OWNER TO postgres;

--
-- Name: tracks_id_track_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tracks_id_track_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tracks_id_track_seq OWNER TO postgres;

--
-- Name: tracks_id_track_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tracks_id_track_seq OWNED BY public.tracks.id_track;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id_user integer NOT NULL,
    email character varying(255),
    password text,
    "createdAt" date DEFAULT now(),
    deleted boolean DEFAULT false,
    role public.roles DEFAULT 'artist'::public.roles,
    "updatedAt" date DEFAULT now()
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
-- Name: videoclips; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.videoclips (
    id_videoclip integer NOT NULL,
    fk_id_track integer,
    fk_id_album integer,
    fk_id_release integer,
    fk_id_act integer,
    fk_id_user integer,
    fk_id_artist integer,
    code character varying(255),
    title character varying(255),
    author_of_text character varying(255),
    author_of_music character varying(255),
    phonogram_timing character varying(255),
    director_screenwriter character varying(255),
    country_of_origin character varying(255),
    territory_video character varying(255),
    age_category character varying(255),
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone DEFAULT now()
);


ALTER TABLE public.videoclips OWNER TO postgres;

--
-- Name: videoclips_id_videoclip_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.videoclips_id_videoclip_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.videoclips_id_videoclip_seq OWNER TO postgres;

--
-- Name: videoclips_id_videoclip_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.videoclips_id_videoclip_seq OWNED BY public.videoclips.id_videoclip;


--
-- Name: acts id_act; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.acts ALTER COLUMN id_act SET DEFAULT nextval('public.acts_id_act_seq'::regclass);


--
-- Name: albums id_album; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.albums ALTER COLUMN id_album SET DEFAULT nextval('public.albums_id_album_seq'::regclass);


--
-- Name: artists id_artist_contract; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artists ALTER COLUMN id_artist_contract SET DEFAULT nextval('public.artists_id_artist_contract_seq'::regclass);


--
-- Name: releases id_release; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.releases ALTER COLUMN id_release SET DEFAULT nextval('public.releases_id_release_seq'::regclass);


--
-- Name: tracks id_track; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks ALTER COLUMN id_track SET DEFAULT nextval('public.tracks_id_track_seq'::regclass);


--
-- Name: users id_user; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id_user SET DEFAULT nextval('public.users_id_user_seq'::regclass);


--
-- Name: videoclips id_videoclip; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips ALTER COLUMN id_videoclip SET DEFAULT nextval('public.videoclips_id_videoclip_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20220621074858-rename_name_fields.js
20220621102423-create-table-releases.js
20220621112546-create-table-acts.js
20220621112911-create-table-tracks.js
20220621121230-create-table-vidoclips.js
20220621122414-create-table-albums.js
20220621122853-create-releations.js
\.


--
-- Data for Name: acts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.acts (id_act, fk_id_user, fk_id_artist_contract, "createdAt", "updatedAt") FROM stdin;
1	1	1	2022-06-21 18:35:07.017005+05	2022-06-21 18:35:07.017005+05
\.


--
-- Data for Name: albums; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.albums (id_album, fk_id_user, fk_id_artist, name, cover, "createdAt", "updatedAt") FROM stdin;
1	1	1	\N	\N	2022-06-21 18:31:33.137697+05	2022-06-21 18:31:33.137697+05
\.


--
-- Data for Name: artists; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.artists (id_artist_contract, fk_id_user, creative_pseudonym, surname, name, patronymic, document, address, email, inn, snils, bank_details, contract_number, contract_agreement, contract_fee, contract_fee_in_words, contract_expiration_date, deleted) FROM stdin;
4	5	text in prop1	Monokle	1	2	3	4	5	6	7	8	9	2022-06-12	0	801 procent	2022-06-09	f
1	2	Volor Flex	Alexander 	Frolov	Alexeseevich	74 50 402342	City Syktyvkar ul Gerov Tankograda	volor@flex.com	967471059784	584964395 34	to phone number 8034523124	DMG 61/21	2022-01-01	652	13 procent	2025-01-01	t
2	4	Sabo	Sabo	1	2	123125123	Ekat	5	6	7123	to phone number 8034523124	9	2022-06-23	12	59 procent	2022-06-10	t
3	3	Blackbird	Blackbird	1	2	3	4	blackbird@prod.com	6	7	8	9	2022-06-12	0	11	2022-06-12	f
\.


--
-- Data for Name: releases; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.releases (id_release, fk_id_user, fk_id_artist, upc, "createdAt", "updatedAt", code, territory, copyright, note) FROM stdin;
1	1	2	\N	\N	\N	\N	\N	\N	\N
4	1	3	\N	2022-06-21 18:50:02.320107+05	2022-06-21 18:50:02.320107+05	\N	\N	\N	\N
\.


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tokens (fk_user_id, refresh_token) FROM stdin;
1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIwQGdtYWlsLmNvbSIsImlkX3VzZXIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1NTg4MDA5OCwiZXhwIjoxNjU5NDgwMDk4fQ.g0UXhfQizw6W_2EToOTTSlu4NWoOq9OKusFugo6GIhk
\.


--
-- Data for Name: tracks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tracks (id_track, fk_id_album, fk_id_release, fk_id_act, fk_id_user, fk_id_artist, id_for_dmg, author_of_music, author_of_text, phonogram_timing, date_of_registration, share_of_copyright, share_of_related_rights, rao, voice, zaicev, mix_upload, "createdAt", "updatedAt") FROM stdin;
4	1	1	1	1	1	\N	\N	\N	\N	\N	\N	\N	f	f	f	f	2022-06-21 18:31:36.13373+05	2022-06-21 18:31:36.13373+05
3	1	1	1	1	1	\N	\N	\N	\N	\N	\N	\N	f	f	f	f	2022-06-21 18:31:36.13373+05	2022-06-21 18:31:36.13373+05
2	1	1	1	1	1	\N	\N	\N	\N	\N	\N	\N	f	f	f	f	2022-06-21 18:31:36.13373+05	2022-06-21 18:31:36.13373+05
1	1	1	1	1	1	\N	\N	\N	\N	\N	\N	\N	f	f	f	f	2022-06-21 18:31:17.660104+05	2022-06-21 18:31:17.660104+05
7	1	1	1	1	1	\N	\N	\N	\N	\N	\N	\N	f	f	f	f	2022-06-21 18:31:36.13373+05	2022-06-21 18:31:36.13373+05
6	1	1	1	1	1	\N	\N	\N	\N	\N	\N	\N	f	f	f	f	2022-06-21 18:31:36.13373+05	2022-06-21 18:31:36.13373+05
5	1	1	1	1	1	\N	\N	\N	\N	\N	\N	\N	f	f	f	f	2022-06-21 18:31:36.13373+05	2022-06-21 18:31:36.13373+05
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id_user, email, password, "createdAt", deleted, role, "updatedAt") FROM stdin;
1	iobox420@gmail.com	$2b$04$yi74RiguusW9SqKPZM.ZQOkQi3ANPE8ewZ709kHMrHw4W4FhCQrXC	2022-06-03	f	admin	2022-06-21
3	iobox4233@gmail.com	$2b$04$yi74RiguusW9SqKPZM.ZQOkQi3ANPE8ewZ709kHMrHw4W4FhCQrXC	2022-06-12	f	artist	2022-06-21
2	artist@gmail.com	$2b$04$weG1.TrGtlkRi0CCQLSjcudEuPTAF7oARpYf4a60nc23gLdVfqyjK	2022-06-12	t	artist	2022-06-21
4	iobox432@gmail.com	$2b$04$yi74RiguusW9SqKPZM.ZQOkQi3ANPE8ewZ709kHMrHw4W4FhCQrXC	2022-06-12	t	admin	2022-06-21
5	newus@gmail.com	p1	2022-06-04	t	artist	2022-06-21
\.


--
-- Data for Name: videoclips; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.videoclips (id_videoclip, fk_id_track, fk_id_album, fk_id_release, fk_id_act, fk_id_user, fk_id_artist, code, title, author_of_text, author_of_music, phonogram_timing, director_screenwriter, country_of_origin, territory_video, age_category, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: acts_id_act_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.acts_id_act_seq', 1, true);


--
-- Name: albums_id_album_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.albums_id_album_seq', 1, true);


--
-- Name: artists_id_artist_contract_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.artists_id_artist_contract_seq', 27, true);


--
-- Name: releases_id_release_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.releases_id_release_seq', 4, true);


--
-- Name: tracks_id_track_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tracks_id_track_seq', 7, true);


--
-- Name: users_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_user_seq', 60, true);


--
-- Name: videoclips_id_videoclip_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.videoclips_id_videoclip_seq', 1, false);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: acts acts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.acts
    ADD CONSTRAINT acts_pkey PRIMARY KEY (id_act);


--
-- Name: albums albums_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.albums
    ADD CONSTRAINT albums_pkey PRIMARY KEY (id_album);


--
-- Name: artists artists_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_pkey PRIMARY KEY (id_artist_contract);


--
-- Name: releases releases_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.releases
    ADD CONSTRAINT releases_pkey PRIMARY KEY (id_release);


--
-- Name: releases releases_upc_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.releases
    ADD CONSTRAINT releases_upc_key UNIQUE (upc);


--
-- Name: tokens tokens_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pk PRIMARY KEY (fk_user_id);


--
-- Name: tracks tracks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_pkey PRIMARY KEY (id_track);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);


--
-- Name: videoclips videoclips_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_pkey PRIMARY KEY (id_videoclip);


--
-- Name: fk_id_user; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_id_user ON public.artists USING btree (fk_id_user);


--
-- Name: fk_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_user_id ON public.tokens USING btree (fk_user_id);


--
-- Name: acts acts_fk_id_artist_contract_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.acts
    ADD CONSTRAINT acts_fk_id_artist_contract_fkey FOREIGN KEY (fk_id_artist_contract) REFERENCES public.artists(id_artist_contract);


--
-- Name: acts acts_fk_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.acts
    ADD CONSTRAINT acts_fk_id_user_fkey FOREIGN KEY (fk_id_user) REFERENCES public.users(id_user);


--
-- Name: albums albums_fk_id_artist_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.albums
    ADD CONSTRAINT albums_fk_id_artist_fkey FOREIGN KEY (fk_id_artist) REFERENCES public.artists(id_artist_contract);


--
-- Name: albums albums_fk_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.albums
    ADD CONSTRAINT albums_fk_id_user_fkey FOREIGN KEY (fk_id_user) REFERENCES public.users(id_user);


--
-- Name: artists artists_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_users FOREIGN KEY (fk_id_user) REFERENCES public.users(id_user);


--
-- Name: releases releases_fk_id_artist_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.releases
    ADD CONSTRAINT releases_fk_id_artist_fkey FOREIGN KEY (fk_id_artist) REFERENCES public.artists(id_artist_contract);


--
-- Name: releases releases_fk_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.releases
    ADD CONSTRAINT releases_fk_id_user_fkey FOREIGN KEY (fk_id_user) REFERENCES public.users(id_user);


--
-- Name: tokens tokens_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_users FOREIGN KEY (fk_user_id) REFERENCES public.users(id_user);


--
-- Name: tracks tracks_fk_id_act_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_act_fkey FOREIGN KEY (fk_id_act) REFERENCES public.acts(id_act);


--
-- Name: tracks tracks_fk_id_act_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_act_fkey1 FOREIGN KEY (fk_id_act) REFERENCES public.acts(id_act);


--
-- Name: tracks tracks_fk_id_act_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_act_fkey2 FOREIGN KEY (fk_id_act) REFERENCES public.acts(id_act);


--
-- Name: tracks tracks_fk_id_act_fkey3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_act_fkey3 FOREIGN KEY (fk_id_act) REFERENCES public.acts(id_act);


--
-- Name: tracks tracks_fk_id_act_fkey4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_act_fkey4 FOREIGN KEY (fk_id_act) REFERENCES public.acts(id_act);


--
-- Name: tracks tracks_fk_id_act_fkey5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_act_fkey5 FOREIGN KEY (fk_id_act) REFERENCES public.acts(id_act);


--
-- Name: tracks tracks_fk_id_album_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey1 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey10; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey10 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey11; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey11 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey2 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey3 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey4 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey5 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey6 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey7 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey8 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_album_fkey9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_album_fkey9 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: tracks tracks_fk_id_artist_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_artist_fkey FOREIGN KEY (fk_id_artist) REFERENCES public.artists(id_artist_contract);


--
-- Name: tracks tracks_fk_id_artist_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_artist_fkey1 FOREIGN KEY (fk_id_artist) REFERENCES public.artists(id_artist_contract);


--
-- Name: tracks tracks_fk_id_artist_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_artist_fkey2 FOREIGN KEY (fk_id_artist) REFERENCES public.artists(id_artist_contract);


--
-- Name: tracks tracks_fk_id_artist_fkey3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_artist_fkey3 FOREIGN KEY (fk_id_artist) REFERENCES public.artists(id_artist_contract);


--
-- Name: tracks tracks_fk_id_artist_fkey4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_artist_fkey4 FOREIGN KEY (fk_id_artist) REFERENCES public.artists(id_artist_contract);


--
-- Name: tracks tracks_fk_id_release_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_release_fkey FOREIGN KEY (fk_id_release) REFERENCES public.releases(id_release);


--
-- Name: tracks tracks_fk_id_release_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_release_fkey1 FOREIGN KEY (fk_id_release) REFERENCES public.releases(id_release);


--
-- Name: tracks tracks_fk_id_release_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_release_fkey2 FOREIGN KEY (fk_id_release) REFERENCES public.releases(id_release);


--
-- Name: tracks tracks_fk_id_release_fkey3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_release_fkey3 FOREIGN KEY (fk_id_release) REFERENCES public.releases(id_release);


--
-- Name: tracks tracks_fk_id_release_fkey4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_release_fkey4 FOREIGN KEY (fk_id_release) REFERENCES public.releases(id_release);


--
-- Name: tracks tracks_fk_id_release_fkey5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tracks
    ADD CONSTRAINT tracks_fk_id_release_fkey5 FOREIGN KEY (fk_id_release) REFERENCES public.releases(id_release);


--
-- Name: videoclips videoclips_fk_id_act_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_act_fkey FOREIGN KEY (fk_id_act) REFERENCES public.acts(id_act);


--
-- Name: videoclips videoclips_fk_id_act_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_act_fkey1 FOREIGN KEY (fk_id_act) REFERENCES public.acts(id_act);


--
-- Name: videoclips videoclips_fk_id_act_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_act_fkey2 FOREIGN KEY (fk_id_act) REFERENCES public.acts(id_act);


--
-- Name: videoclips videoclips_fk_id_album_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_album_fkey FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: videoclips videoclips_fk_id_album_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_album_fkey1 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: videoclips videoclips_fk_id_album_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_album_fkey2 FOREIGN KEY (fk_id_album) REFERENCES public.albums(id_album);


--
-- Name: videoclips videoclips_fk_id_artist_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_artist_fkey FOREIGN KEY (fk_id_artist) REFERENCES public.artists(id_artist_contract);


--
-- Name: videoclips videoclips_fk_id_artist_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_artist_fkey1 FOREIGN KEY (fk_id_artist) REFERENCES public.artists(id_artist_contract);


--
-- Name: videoclips videoclips_fk_id_artist_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_artist_fkey2 FOREIGN KEY (fk_id_artist) REFERENCES public.artists(id_artist_contract);


--
-- Name: videoclips videoclips_fk_id_release_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_release_fkey FOREIGN KEY (fk_id_release) REFERENCES public.releases(id_release);


--
-- Name: videoclips videoclips_fk_id_release_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_release_fkey1 FOREIGN KEY (fk_id_release) REFERENCES public.releases(id_release);


--
-- Name: videoclips videoclips_fk_id_release_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_release_fkey2 FOREIGN KEY (fk_id_release) REFERENCES public.releases(id_release);


--
-- Name: videoclips videoclips_fk_id_track_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_track_fkey FOREIGN KEY (fk_id_track) REFERENCES public.tracks(id_track);


--
-- Name: videoclips videoclips_fk_id_track_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_track_fkey1 FOREIGN KEY (fk_id_track) REFERENCES public.tracks(id_track);


--
-- Name: videoclips videoclips_fk_id_track_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_track_fkey2 FOREIGN KEY (fk_id_track) REFERENCES public.tracks(id_track);


--
-- Name: videoclips videoclips_fk_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_user_fkey FOREIGN KEY (fk_id_user) REFERENCES public.users(id_user);


--
-- Name: videoclips videoclips_fk_id_user_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_user_fkey1 FOREIGN KEY (fk_id_user) REFERENCES public.users(id_user);


--
-- Name: videoclips videoclips_fk_id_user_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.videoclips
    ADD CONSTRAINT videoclips_fk_id_user_fkey2 FOREIGN KEY (fk_id_user) REFERENCES public.users(id_user);


--
-- PostgreSQL database dump complete
--

