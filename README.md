## ๐BookCurly

- [๋ง์ผ์ปฌ๋ฆฌ](https://www.kurly.com/shop/main/index.php?utm_source=1055&utm_medium=2202&utm_campaign=home_hashtag&utm_term=&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrJeFgts5vbFCL6VrOjIAEPxfM0T2PrWZWCo67LxOtYnhvUAt6ywrLxoCDGMQAvD_BwE#%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC&utm_content=brand) ์ฌ์ดํธ ๋์์ธ๊ณผ ๋์ API๋ฅผ ์ด์ฉํ ํ๋ก์ ํธ
- 2021.02.12 ~ 2021.02.28๊น์ง 2์ฃผ๊ฐ ์งํ <br>
~~API ๋ฐฐํฌ๊ด๋ จ ๋ฌธ์ ๋ก ์์ ์ฒจ๋ถ~~

## ๐ฅ Work

### 1. Main Page
![main](https://user-images.githubusercontent.com/67853616/155665318-4bdd3f45-6197-42b7-9935-177d8cc72877.gif)
### 1-1. Carousel
* main์์ ์ฑ์ฌ๋ผ์ด๋๋ก ๋ฐ๋ณต์ ์ผ๋ก ์ฌ์ฉ๋๋ ์ปดํฌ๋ํธ
* React Slick ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ฌ์ฉ <br>
  -> node_modules์์ css ํ์ผ ๊บผ๋ด ์ง์  ์คํ์ผ๋ง<br>
  -> ์ข์ฐ ํ์ดํ ์ถ๊ฐ (`absolute`, `relative`), ์ด๋ฏธ์ง ํฌ๊ธฐ, ํ๋ฒ์ 4๊ฐ ๋ณด์ด๋๋ก, ๋ฌดํ ์ข์ฐ ์ด๋, scale ์ ๋๋ฉ์ด์
* ์ฑ ํ๋ ํด๋ฆญ์ ํด๋น ์ํ ๋ํ์ผ ํ์ด์ง๋ก ์ด๋

### 1-2. ์นดํ๊ณ ๋ฆฌ
![main_category](https://user-images.githubusercontent.com/67853616/155666480-a0973d81-5d00-45ce-8547-d5aec2096491.gif)
* useState ์ด์ฉํด ์ด์ฉ์๊ฐ ์ ํํ ์นดํ๊ณ ๋ฆฌ๋ช ๋ณ๊ฒฝ ๊ด๋ฆฌ<br>
-> ์ง๋ณด๋ผ์ ์์ ๋ถ์ฌ๋๋ ์นดํ๊ณ ๋ฆฌ ์ง์ <br>
-> ์ ํ๋ ์นดํ๊ณ ๋ฆฌ์ ๋ง๋ ๋์ ๋ชฉ๋ก Carousel

![main_to_list](https://user-images.githubusercontent.com/67853616/155666953-3ce1e97a-e4a4-4476-bda0-f376e7b1518a.gif)

* ์ ํํ ์นดํ๊ณ ๋ฆฌ์ ๋ง๋ ๋๋ณด๊ธฐ ์นธ ๋ง๋ จ 
*  ๋๋ณด๊ธฐ ํด๋ฆญ์ ๋ฆฌ์คํธ๋ก ๋ ๋ง์ ๋ชฉ๋ก ์ถ๋ ฅ

### 1-3. 2๋จ ํค๋
![2header](https://user-images.githubusercontent.com/67853616/155667278-bf9d9401-7f5d-4286-8256-0f360369831f.gif)
* `position: absolute,  width: 150px` ๋ถ์ฌ
*  `left` ์์ฑ ๊ฐ : 0๊ณผ 100%์ ํตํด ์๋์ ์ธ ์์น ๋ถ์ฌ
* hover ์ ๋ฌด์ ๋ฐ๋ผ `display` ์์ฑ ๊ฐ : none, block์ ํตํด ๋ง์ฐ์ค ์์น์ ๋ฐ๋ผ ๋ฑ์ฅํ๊ฒ ํจ
* ํด๋ฆญํ๋ฉด router ํ๋ผ๋ฏธํฐ๋ก categoryId ๊ฐ์ด ์ ๋ฌ๋์ด ํด๋น ๊ฐ์ผ๋ก API GET ํธ์ถํ๊ณ  ๋ฆฌ์คํธ๋ก ๋ณด์ฌ์ค


### 2. List Page & Detail Page
### 2-1. ํค๋ ํด๋ฆญ์ ์ฑ ๋ชฉ๋ก & ์ ํ ๊ธฐ์ค ๋ฐ๋ฅธ ์ ๋ ฌ
![header_list](https://user-images.githubusercontent.com/67853616/155668244-51343e7f-83df-430a-add4-902d52aa1089.gif)
* useEffect์ dependency ๊ฐ์ ํค๋์์ ํด๋ฆญํ ๋ฉ๋ด๊ฐ์ผ๋ก ์ค์ ํด API GET ์์ฒญ์ ๋ ๋ฆฌ๋๋ก ํ๊ณ  ๋ชฉ๋ก ์ฌ๋๋๋ง
* [๋ฌธ์  ์ํฉ] API ์์ฒญ ์ฟผ๋ฆฌ์ ์ ๋ ฌ ๋ถ์ฌ ๋ถ๊ฐ๋ฅ
* [ํด๊ฒฐ] ์ง์  Response JSON ๋ด ํน์  key์ value๋ฅผ ๊ธฐ์ค์ผ๋ก element๋ฅผ ์ฌ๋ฐฐ์ดํ๋ ํจ์ ์์ฑ
* ์ฌ๋ฐฐ์ด์ด ์ ์์ ์ผ๋ก ์ฒ๋ฆฌ๋๋ฉด list ์ปดํฌ๋ํธ ์ฌ๋๋๋ง๋๋๋ก useEffect ์ฌ์ฉ

### 2-2. ๊ฒ์ ์ ๊ฒฐ๊ณผ ๋ชฉ๋ก
![detail_search](https://user-images.githubusercontent.com/67853616/155668747-f78c9d30-ff43-4ac1-8ec9-5e36a6af480b.gif)
* ํค๋์ `input` ํ๊ทธ์ ์๋ ฅ๋ ๊ฐ์ผ๋ก API GET ์์ฒญ
* ๊ฒ์ ์์ฒญ ์ฟผ๋ฆฌ ๋ณ๊ฒฝ๋จ์ ๋ฐ๋ผ useEffect ์คํ๋๋ฉฐ ๋ชฉ๋ก ์ปดํฌ๋ํธ ์ฌ๋๋๋ง
* ์ฌ์ฉ์๊ฐ ํน์  ์ฑ ํด๋ฆญ์ ํด๋น ์ฑ์ title, categoryId ๊ฐ์ ธ์ด
* GET Detail API์ ํ์ํ searchType ์ฟผ๋ฆฌ ๊ฐ์ ๋ถ์ฌํ๋ ํจ์ ์์ฑ
* ์์ฒญ ํ๋ผ๋ฏธํฐ๊ฐ ๋ค ๊ฐ์ถฐ์ง๋ฉด API๋ก ์์ธ ์ ๋ณด ๋ฐ์์ค๊ณ  ๋ํ์ผ ํ์ด์ง๋ ์ด๋
* ํด๋น ์ฑ์ ์ธํฐํํฌ ํ์ด์ง๋ก ์ด๋ํ  ์ ์๋๋ก ๋งํฌ ์ฐ๊ฒฐ


### 3. Signup


### 3-1. ์ ๋ณด ์๋ ฅ ๊ฐ ์กฐ๊ฑด ๋ง์กฑ ์ฌ๋ถ์ ์๊ฐํ
![signup_valiation](https://user-images.githubusercontent.com/67853616/155672862-06814f1b-7299-45db-ad75-d9c3c4b606ec.gif)
* `<input>` ํ๊ทธ์ name๊ณผ value ์์ฑ ์ด์ฉ

```js
    <input className="signup_Pw_input"  placeholder="๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํด์ฃผ์ธ์"  maxLength="16"
    name="Pwd" type="text"  value={Pwd}
  onChange={onChange} onClick={onClick_Info} />
```   
*  change์ click ์ด๋ฒคํธ ๋ฐ์์ ํธ๋๋ง ํจ์ ์์ฑ
```js
//์๋ ฅ ๊ฐ์ ๋ฐ๋ฅธ ์ํ ์ค์ 
    const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };          
```
```js
//์๋ ฅํ๊ณ ์ ํ  ๋ ํด๋ฆญํ์ผ๋ ์กฐ๊ฑด ๋ณด์ฌ์ฃผ๊ธฐ
 const onClick_Info = (e) => {
    console.log(e.target);
    let name = `show${e.target.name}Info`;
    setInputs({
      ...inputs,
      [name]: true,
    });
  };

```
* ํ์๊ฐ์ ์กฐ๊ฑด ๊ฒ์ฆํด true/false ๋ฐํํ๋ ์ ๊ทํํ์ ์์ฑ
* ๋ฐํ๋๋ true/false ์ด์ฉ + ์ผํญ์ฐ์ฐ์๋ก class ๋ช ๋ถ์ฌ
* class ๋ช์ ๋ฐ๋ฅธ ์์ ์ค์ 
```js
<li className={IsPassword(Pwd) ? "true" : "false"}>
```
### 3-2. DaumPostcode ์ด์ฉํ ์ฃผ์ ์ ๋ณด
![signup_address](https://user-images.githubusercontent.com/67853616/155673152-f6eb51b0-1bc2-4ed6-bb2c-474b4daf0140.gif)


**์ฃผ์ ์๋ ฅ ์ํ ๋ฐ๋ฅธ input**
<img width="483" alt="image" src="https://user-images.githubusercontent.com/67853616/155671820-c401164b-7a6a-489c-949c-3d855478f466.png">

* ์ฃผ์ ์๋ ฅ๊ฐ์ด ์๋ ๊ฒฝ์ฐ ๋ฒํผ์ ํด๋ฆญํด `DaumPostcode`๊ฐ ์คํ๋๋๋ก ํจ
<img width="437" alt="image" src="https://user-images.githubusercontent.com/67853616/155671886-8eeea05f-9c86-4a92-ba15-1cc058f6fded.png">

* `DaumPostcode`๊ฐ POP์ผ๋ก ์คํ๋๊ณ  ๋๋ต์ ์ธ ์ฃผ์ ๊ฒ์์ผ๋ก ์ฐํธ๋ฒํธ์ ์ ํํ ์ฃผ์ ๋ฐ์์ด
<img width="484" alt="image" src="https://user-images.githubusercontent.com/67853616/155671919-964d23d7-813d-4ed1-8b5b-a6dd2b063a15.png">

* ๋ฐ์์จ ์ ํํ ์ฃผ์์ ์ฐํธ๋ฒํธ๋ ์๋์ผ๋ก `input`์ ๋ฃ์ด์ค
* ์ด๋ฏธ ๋ฐ์์จ ์ฃผ์๊ฐ ์์์ผ๋ก ๋ฒํผ์ ๋ฌธ๊ตฌ๋ ์ฃผ์ ์ฌ๊ฒ์์ผ๋ก ์์ 
* ๋ง์ง๋ง ์นธ์๋ ์ถ๊ฐ์ ์ธ ๋ํธ์ ์๋ ฅ

### 4. Login & User Profile
#### ์นด์นด์ค ์์ ๋ก๊ทธ์ธ
![kakaologin](https://user-images.githubusercontent.com/67853616/155673585-d51da8c0-f009-48fe-b064-657b4c167ea0.gif)
<img width="404" alt="image" src="https://user-images.githubusercontent.com/67853616/155674304-b16701e5-b688-4b1e-9c2d-8956e9a3bdae.png">

* ์นด์นด์ค ๋ก๊ทธ์ธ ์ฑ๊ณตํด user ์ ๋ณด๋ฅผ **`crypto-js` ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ด์ฉํด ์ํธํ ํด** `localStorage`์ ์ ์ฅ
* ์ ์  ์ ๋ณด๊ฐ ์๋ ๊ฒฝ์ฐ ์ฐ์ธก ์๋จ์๋ **๋ก๊ทธ์ธ/ํ์๊ฐ์์ด ์๋ ์ ์ ์ด๋ฆ/์ ์ ์ ๋ณด**๊ฐ ๋จ๋๋ก ํจ
* ๋ด ์ ๋ณด ํด๋ฆญ ์ localStorage์ ์ํธํ๋์ด ์ ์ฅ๋ ์ ์ ์ ์ ๋ณด๋ฅผ **๋ณตํธํํด ํ์ด์ง์ ๋ณด์ฌ์ค**
* ๋ก๊ทธ์์ ์ locaStorage์ ์ ๋ณด๋ฅผ ์ญ์ ํ๊ณ  **์ ์ ์ด๋ฆ/์ ์ ์ ๋ณด๊ฐ ์๋ ๋ก๊ทธ์ธ/ํ์๊ฐ์**์ด ๋จ๋๋ก ํจ
