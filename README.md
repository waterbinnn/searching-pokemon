# freed-test

## Stack

TypeScript, React, Redux-toolkit, Emotion

## Feature

- 검색기능 <br>
  Redux-toolkit을 사용하여 fetch data를 관리하였습니다.
  컴포넌트가 여러개로 나뉘어져 전역적으로 필요한 데이터를 불러올 수 있도록 해주기 위해서 사용하였습니다.

- 에러핸들링 <br>
  Redux-toolkit 의 extraReducers 를 사용하여 pending, fulfilled, rejected state를 관리하였습니다.
  결과가 없는 input 을 입력했을 경우, setInterval 로 4초동안 로딩중(Searching...) 화면을 띄워준 후 count 가 4초가 되었을 때 에러 화면을 보여주도록 작성하였습니다.

**[추가한 기능]**

- 검색 히스토리 <br>
  리듀서를 사용하여 구현하였습니다.
  검색 시 검색 히스토리가 남고, 삭제 버튼을 클릭하면 삭제됩니다.
  5개 이상 검색했을 경우에는 검색 내역에서 자동으로 삭제되고 새로 검색한 요소로 업데이트 됩니다.

## Folder Tree

```
📦 FREED-TEST
 ┣ 📂src
 ┃ ┣ 📂 assets
 ┃ ┣ 📂 components
 ┃ ┃  ┣ Header.tsx
 ┃ ┃  ┣ Pokemon.tsx : 검색창, 결과, 히스토리 최상위 컴포넌트
 | ┃  ┣ SearchForm.tsx : 검색창 컴포넌트
 | ┃  ┣ PokemonCard.tsx : 결과 컴포넌트
 | ┃  ┣ HistoryItem.tsx : 검색 내역 최대 5개 보여주는 컴포넌트
 | ┃  ┣ ErrorMsg.tsx : 검색 에러시 보여줄 컴포넌트
 | ┃  ┗ Searching.tsx : 로딩중 컴포넌트
 ┃ ┗ 📂 redux
 | ┃  ┣ pokeSlice.tsx
 | ┃  ┗ store.ts
 ┃ ┣ 📂 styles
 ┃ ┣ App.tsx
 ┗ ┗ index.tsx

```

## 구현 Gif

<img width="250" src="https://user-images.githubusercontent.com/96714788/206834477-12546f86-f03d-4403-a3b2-7e8c7aa310f8.gif"/>
