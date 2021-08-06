# react-pagination-component

A simple pagination component to use inside your react projects.

## Demo

![pagination component](https://res.cloudinary.com/deyudesls/image/upload/c_scale,q_100,w_527/v1627897538/pagination-component/Screen_Shot_2021-08-02_at_9.45.00_AM_ajqoei.gif)

[Demo](https://csb-pg8kq-g5szse1c7-ninsau.vercel.app/)

View sample code on [codesandbox](https://codesandbox.io/s/pagination-for-reactjs-pg8kq?file=/src/App.js).

## How to use

### Install

```
1. npm i pagination-for-reactjs-component --save
```

### 2. Import pagination component inside react

- With bootstrap design

```
import Pagination from 'pagination-for-reactjs-component'
```

- With material ui

```
import MuiPagination from 'pagination-for-reactjs-component/mui'
```

### 3. Call the pagination function and pass parameters

Inside your render or return

- for bootstrap

```
        <PaginationComponent
          pageCount={pageCount}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
```

- for material ui

```
        <MuiPagination
          pageCount={pageCount}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
```

### 4. Definitions

- pageCount

```
(variable, type:integer), pass the value of the total number of pages or numbers for your pagination
```

- pageIndex

```
(variable, type:integer), pass the value of the current page number within your series.
```

- setPageIndex

```
(function, react hook), this hook receives intergers to pass to pageIndex for navigation
```

### 5. Custom styling

- Top style, access the `pagination` css class and implement your design
- Default styling

```
.pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
```

### 6. Sample Code

```
import { React, useState } from "react";
import PaginationComponent from "pagination-for-reactjs-component";
import MuiPagination from "pagination-for-reactjs-component/mui";

export default function App() {
  const [pageIndex, setPageIndex] = useState(1);
  let pageCount = 200;

  return (
    <>
      <div className="container-fluid mx-3">
        <h1>You are on page {pageIndex}</h1>

        <span>bootstrap design</span>
        <Pagination
          pageCount={pageCount}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />

        <span>material ui design</span>
        <MuiPagination
          pageCount={pageCount}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
      </div>
    </>
  );
}

```
