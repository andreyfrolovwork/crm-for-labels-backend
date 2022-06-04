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

INSERT INTO db_for_label.tokens (fk_user_id, refresh_token) VALUES (17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIxQGdtYWlsLmNvbSIsImlkX3VzZXIiOjE3LCJpYXQiOjE2NTQxODA5MzYsImV4cCI6MTY1NDE4NDUzNn0.WubCnFrMWqlcrCO50ui6YZZNNQyfWFLxcYwv6bknFy0');
INSERT INTO db_for_label.tokens (fk_user_id, refresh_token) VALUES (3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDMxQGdtYWlsLmNvbSIsImlkX3VzZXIiOjMsInJvbGUiOiJhcnRpc3QiLCJpYXQiOjE2NTQyNjc5MjgsImV4cCI6MTY1NDI3MTUyOH0.-3S3cvtfzafV1HzrWCJQUuuGAfpBeGw4VV8gmZ0XV7Y');
INSERT INTO db_for_label.tokens (fk_user_id, refresh_token) VALUES (4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDMyQGdtYWlsLmNvbSIsImlkX3VzZXIiOjQsInJvbGUiOiJhcnRpc3QiLCJpYXQiOjE2NTQyNjc5NDYsImV4cCI6MTY1NDI3MTU0Nn0.X2M5Ee-MuYE08XjhIXejWUlQqDN0q3bVsqxODwk7nJ0');
INSERT INTO db_for_label.tokens (fk_user_id, refresh_token) VALUES (5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDMzQGdtYWlsLmNvbSIsImlkX3VzZXIiOjUsInJvbGUiOiJhcnRpc3QiLCJpYXQiOjE2NTQyNjc5NjMsImV4cCI6MTY1NDI3MTU2M30._17COgDt8Qzl_EyMqBfzccOz38UxmE7LNpEuHe2kFXA');
