# react-pagination-component
A simple pagination component to use inside your react projects.

## Demo

View demo on [codesandbox](https://codesandbox.io/s/pagination-for-reactjs-pg8kq?file=/src/App.js).

## How to use

### Install
```
1. npm i pagination-for-reactjs-component --save
```

### 2. Import pagination component inside react
```
import pagin  from 'pagination-for-reactjs-component'
```

### 3. Call the pagination function and pass parameters
 
 Inside your render or return

```

pagin(pageCount, pageIndex, setPageIndex)
```

### 4. Definitions
```
1. pageCount -> (variable, type:integer), pass the value of the total number of pages or numbers for your pagination.

2. pageIndex -> (variable, type:integer), pass the value of the current page number within your series.

3. setPageIndex -> (function, react hook), this hook receives intergers to pass to pageIndex for navigation.

```

Pagination styling with bootstrap



