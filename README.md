# react-burger-backend

**R-Burger-website** is one of my personal projects.This repository holds the code of it's backend which is a **RESTful API**.

<em> The frontend of this project can be found [here (React)](https://github.com/Tanju67/react-burger-frontend.git) </em>

<em> Visit complete live project [r-burger-restaurant](https://r-burger-restaurant-aagc.onrender.com/) </em>

### Contents

- [react-burger-backend](#react-burger-backend)
  - [Contents](#contents)
  - [Features:](#features)
  - [Tech used:](#tech-used)
  - [How to get the project:](#how-to-get-the-project)
    - [Using Git (recommended)](#using-git-recommended)
    - [Using manual download ZIP](#using-manual-download-zip)
  - [Setting up environments](#setting-up-environments)
  - [API endpoints:](#api-endpoints)
    - [_Indication_](#indication)
    - [Auth related](#auth-related)
    - [Admin related](#admin-related)
    - [Product admin related](#product-admin-related)
    - [Cart related](#cart-related)
    - [Order related](#order-related)

## Features:

- Users and admin can create their profiles (token-based authentication)
- Users can add any product they want to the cart.
- Users can place orders.
- Users can track the status of their orders.
- Users can view their old orders.
- Unregistered public users can see the menu and products, but cannot add the product to the cart and order.
- Admin can add new menu, update or delete existing menu.
- Admin can add a new product to the menu, update the existing product or delete it from the menu.
- Admin can see current orders and all orders of that day.
- Admin can update the status of current orders.

## Tech used:

**Runtime environment**

- [x] Node.js

**Database**

- [x] MongoDB

**Image storage service**

- [x] Cloudinary

## How to get the project:

#### Using Git (recommended)

1. Navigate & open CLI into the directory where you want to put this project & Clone this project using this command.

```bash
git clone https://github.com/Tanju67/react-burger-backend.git
```

#### Using manual download ZIP

1. Download repository
2. Extract the zip file, navigate into it & copy the folder to your desired directory

## Setting up environments

1.  Create the backend url in a .env file.

```
MONGO_URI=(your mongo uri)
JWT_SECRET= (create your key)
JWT_LIFETIME=(create your key)
CLOUD_NAME=(set your key for cloudinary)
API_KEY=(set your key for cloudinary)
API_SECRET=(set your key for cloudinary)
PORT=(set your port number)
```

2.  Install NPM packages.

```
npm install
```

1.  Start the server .

```
npm start
```

## API endpoints:

#### _Indication_

- [x] **Authentication required**
- [ ] **Authentication not required**

### Auth related

- [ ] Resgister: `POST localhost:5000/api/v1/auth/register`
- [ ] Login: `POST localhost:5000/api/v1/auth/login`
- [x] Get current user: `GET localhost:5000/api/v1/auth/current`

### Admin related

- [ ] Get all menus: `GET localhost:5000/api/v1/admin`
- [ ] Get extra menus: `GET localhost:5000/api/v1/admin/extra`
- [ ] Get single menu: `GET localhost:5000/api/v1/admin/:id`
- [x] Create menu: `POST localhost:5000/api/v1/admin`
- [x] Update menu: `PATCH localhost:5000/api/v1/admin/:id`
- [x] Delete menu: `DELETE localhost:5000/api/v1/admin/:id`

### Product admin related

- [ ] Get all menu product: `GET localhost:5000/api/v1/productAdmin/menu/:menuId`
- [ ] Get single product: `GET localhost:5000/api/v1/productAdmin/:id`
- [x] Create product: `POST localhost:5000/api/v1/productAdmin/:menuId`
- [x] Update product: `PATCH localhost:5000/api/v1/productAdmin/:id`
- [x] Delete product: `DELETE localhost:5000/api/v1/productAdmin/:id`

### Cart related

- [x] Get cart products: `GET localhost:5000/api/v1/cart`
- [x] Add product to cart: `POST localhost:5000/api/v1/cart`
- [x] Delete all cart products: `DELETE localhost:5000/api/v1/cart/deleteAll`
- [x] Delete product from cart: `DELETE localhost:5000/api/v1/cart/:id`

### Order related

- [x] Create order: `POST localhost:5000/api/v1/order`
- [x] Get user current order: `GET localhost:5000/api/v1/order/current`
- [x] Get user order history: `GET localhost:5000/api/v1/order/history`
- [x] Get single order: `GET localhost:5000/api/v1/order/admin/detail/:id`
- [x] Get all current active orders: `GET localhost:5000/api/v1/order/admin/activeOrders`
- [x] Update order status: `PATCH localhost:5000/api/v1/order/admin/updateOrder/:id`
- [x] Get all today orders: `GET localhost:5000/api/v1/order/admin/todayOrders`
