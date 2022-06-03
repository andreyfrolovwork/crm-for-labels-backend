create table tokens
(
    fk_user_id    int,
    refresh_token text null,
    constraint tokens_ibfk_1
        foreign key (fk_user_id) references users (id_user)
);

create index fk_user_id
    on tokens (fk_user_id);

alter table tokens
    modify fk_user_id int auto_increment;

INSERT INTO db_for_label.tokens (fk_user_id, refresh_token) VALUES (6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIwNUBnbWFpbC5jb20iLCJpZF91c2VyIjo2LCJpYXQiOjE2NTQxNzcyNTQsImV4cCI6MTY1NDE4MDg1NH0.uLjQVdSDGIsNVMoqwWAVwO9rQVdfGIXAQNc3ar4EbKc');
INSERT INTO db_for_label.tokens (fk_user_id, refresh_token) VALUES (17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIxQGdtYWlsLmNvbSIsImlkX3VzZXIiOjE3LCJpYXQiOjE2NTQxODA5MzYsImV4cCI6MTY1NDE4NDUzNn0.WubCnFrMWqlcrCO50ui6YZZNNQyfWFLxcYwv6bknFy0');
INSERT INTO db_for_label.tokens (fk_user_id, refresh_token) VALUES (18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIwQGdtYWlsLmNvbSIsImlkX3VzZXIiOjE4LCJpYXQiOjE2NTQxODEyMjUsImV4cCI6MTY1NDE4NDgyNX0.Ma0KHNOYc0wtOT6LD_9xt3hIZIO_aAb7Zh5sDIkdaZQ');
