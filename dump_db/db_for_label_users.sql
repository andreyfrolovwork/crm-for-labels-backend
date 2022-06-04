create table users
(
    id_user   int auto_increment
        primary key,
    name_2    varchar(255)                                                   null,
    name_1    varchar(255)                                                   null,
    name_3    varchar(255)                                                   null,
    email     varchar(255)                                                   null,
    password  text                                                           null,
    role      enum ('admin', 'operator', 'artist') default 'artist'          null,
    createdAt datetime                             default CURRENT_TIMESTAMP null,
    deleted   tinyint(1)                           default 0                 null
);

INSERT INTO db_for_label.users (id_user, name_2, name_1, name_3, email, password, role, createdAt, deleted) VALUES (1, null, null, null, 'iobox420@gmail.com', '$2b$04$yi74RiguusW9SqKPZM.ZQOkQi3ANPE8ewZ709kHMrHw4W4FhCQrXC', 'admin', '2022-06-03 17:44:41', 0);
INSERT INTO db_for_label.users (id_user, name_2, name_1, name_3, email, password, role, createdAt, deleted) VALUES (2, null, null, null, 'iobox423@gmail.com', '$2b$04$weG1.TrGtlkRi0CCQLSjcudEuPTAF7oARpYf4a60nc23gLdVfqyjK', 'artist', '2022-06-03 18:58:51', 0);
INSERT INTO db_for_label.users (id_user, name_2, name_1, name_3, email, password, role, createdAt, deleted) VALUES (3, null, null, null, 'iobox431@gmail.com', '$2b$04$aUWJ93beaDxPk3COw3DsO.i4h/JMTh5qb/XKE9fscdlkCZ75uJexy', 'artist', '2022-06-03 19:52:08', 0);
INSERT INTO db_for_label.users (id_user, name_2, name_1, name_3, email, password, role, createdAt, deleted) VALUES (4, null, null, null, 'iobox432@gmail.com', '$2b$04$Cdb4eSwcbJ.R2vr6gFDbZuihvigXIRryyME2QSnFNVxPTJnHPK3qS', 'artist', '2022-06-03 19:52:26', 0);
INSERT INTO db_for_label.users (id_user, name_2, name_1, name_3, email, password, role, createdAt, deleted) VALUES (5, null, null, null, 'iobox433@gmail.com', '$2b$04$hmzFycv4YU3rpomFYP393OJwWVBWPDrkDI18VIBf4dkflcijCp4S.', 'artist', '2022-06-03 19:52:43', 0);
INSERT INTO db_for_label.users (id_user, name_2, name_1, name_3, email, password, role, createdAt, deleted) VALUES (6, null, null, null, 'iobox@gmail.com', '$2b$04$wZF8acWiGHfXu4Bh/IB24OEN5Sz45R8vGNVi0M8CkB72bBsqkVhNS', 'artist', '2022-06-04 09:49:09', 0);
INSERT INTO db_for_label.users (id_user, name_2, name_1, name_3, email, password, role, createdAt, deleted) VALUES (7, null, null, null, 'iobox1@gmail.com', '$2b$04$Qq2CfrFwlPJEMbnoyfXmv.mWa5C4w3K55C6gM0.HIMgnpntRqWUV.', 'artist', '2022-06-04 13:48:04', 0);
