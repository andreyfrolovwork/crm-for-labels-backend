create table artists
(
    id_artist_contract       int auto_increment
        primary key,
    fk_id_user               int                  null,
    creative_pseudonym       varchar(255)         null,
    name_2                   varchar(255)         null,
    name_1                   varchar(255)         null,
    name_3                   varchar(255)         null,
    document                 text                 null,
    address                  text                 null,
    email                    varchar(255)         null,
    inn                      varchar(255)         null,
    snils                    varchar(255)         null,
    bank_details             text                 null,
    contract_number          varchar(255)         null,
    contract_agreement       date                 null,
    contract_fee             varchar(255)         null,
    contract_fee_in_words    varchar(255)         null,
    contract_expiration_date date                 null,
    deleted                  tinyint(1) default 0 null,
    constraint artists_ibfk_1
        foreign key (fk_id_user) references users (id_user)
);

create index fk_id_user
    on artists (fk_id_user);

INSERT INTO db_for_label.artists (id_artist_contract, fk_id_user, creative_pseudonym, name_2, name_1, name_3, document, address, email, inn, snils, bank_details, contract_number, contract_agreement, contract_fee, contract_fee_in_words, contract_expiration_date, deleted) VALUES (1, 2, 'Volor Flex', 'Vladimi', 'Frolov', 'Alexeseevich', 'doc data', 'address', 'volor@flex.ru', 'inn number', 'Snils', 'bank_details', 'contract_number', '2022-06-03', '50', '50 procent', '2025-06-20', 0);
INSERT INTO db_for_label.artists (id_artist_contract, fk_id_user, creative_pseudonym, name_2, name_1, name_3, document, address, email, inn, snils, bank_details, contract_number, contract_agreement, contract_fee, contract_fee_in_words, contract_expiration_date, deleted) VALUES (3, 3, 'Sabo', 'Sabo', null, null, null, null, null, null, null, null, null, null, null, null, null, 0);
INSERT INTO db_for_label.artists (id_artist_contract, fk_id_user, creative_pseudonym, name_2, name_1, name_3, document, address, email, inn, snils, bank_details, contract_number, contract_agreement, contract_fee, contract_fee_in_words, contract_expiration_date, deleted) VALUES (4, 4, 'Blackbird', 'Blackbird', null, null, null, null, null, null, null, null, null, null, null, null, null, 0);
INSERT INTO db_for_label.artists (id_artist_contract, fk_id_user, creative_pseudonym, name_2, name_1, name_3, document, address, email, inn, snils, bank_details, contract_number, contract_agreement, contract_fee, contract_fee_in_words, contract_expiration_date, deleted) VALUES (5, 5, 'Monokle', 'Monokle', null, null, null, null, null, null, null, null, null, null, null, null, null, 0);
