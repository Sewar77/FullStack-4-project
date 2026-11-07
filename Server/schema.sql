-- planning db
-- //user
create table users(
    id serial primary key, 
    name varchar(200) not null, 
    email varchar(150) unique not null, 
    hashed_password varchar(200) not null, 
    role varchar(20) not null default 'user' check (role in ('admin', 'user', 'trader')), 
	status varchar(20) not null default 'approved' check (status in ('pending', 'approved', 'rejected')),
	created_at timestamp default current_timestamp, 
	updated_at timestamp default current_timestamp
)

create table categories(
    id serial primary key, 
    name varchar(30) not null unique, 
    description text, 
    is_acrhived boolean default true,
    status varchar(20) not null default 'approved' check (status in ('pending', 'approved', 'rejected')),
	created_at timestamp default current_timestamp, 
	updated_at timestamp default current_timestamp
)

create table products(
    id serial primary key, 
    name varchar(200) not null, 
    description text, 
    price numeric (10, 2) not null, 
    stock integer default 0, 
    image_url text, 

    category_id integer not null, -- category => 1-m 
    created_by integer not null, 

    status varchar(20) not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
    is_acrhived boolean default true,
    created_at timestamp default current_timestamp, 
	updated_at timestamp default current_timestamp, 

    foreign key (category_id) references categories(id) on delete cascade,

    foreign key (created_by) references user(id) on delete cascade

)



