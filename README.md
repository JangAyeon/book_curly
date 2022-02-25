## 📖BookCurly

- [마켓컬리](https://www.kurly.com/shop/main/index.php?utm_source=1055&utm_medium=2202&utm_campaign=home_hashtag&utm_term=&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrJeFgts5vbFCL6VrOjIAEPxfM0T2PrWZWCo67LxOtYnhvUAt6ywrLxoCDGMQAvD_BwE#%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC&utm_content=brand) 사이트 디자인과 도서 API를 이용한 프로젝트
- 2021.02.12 ~ 2021.02.28까지 2주간 진행 <br>
~~API 배포관련 문제로 영상 첨부~~

## 🖥 Work

### 1. Main Page
![main](https://user-images.githubusercontent.com/67853616/155665318-4bdd3f45-6197-42b7-9935-177d8cc72877.gif)
### 1-1. Carousel
* main에서 책슬라이드로 반복적으로 사용되는 컴포넌트
* React Slick 라이브러리 사용 <br>
  -> node_modules에서 css 파일 꺼내 직접 스타일링<br>
  -> 좌우 화살표 추가 (`absolute`, `relative`), 이미지 크기, 한번에 4개 보이도록, 무한 좌우 이동, scale 애니메이션
* 책 하나 클릭시 해당 상품 디테일 페이지로 이동

### 1-2. 카테고리
![main_category](https://user-images.githubusercontent.com/67853616/155666480-a0973d81-5d00-45ce-8547-d5aec2096491.gif)
* useState 이용해 이용자가 선택한 카테고리명 변경 관리<br>
-> 진보라색 색상 부여되는 카테고리 지정<br>
-> 선택된 카테고리에 맞는 도서 목록 Carousel

![main_to_list](https://user-images.githubusercontent.com/67853616/155666953-3ce1e97a-e4a4-4476-bda0-f376e7b1518a.gif)

* 선택한 카테고리에 맞는 더보기 칸 마련 
*  더보기 클릭시 리스트로 더 많은 목록 출력

### 1-3. 2단 헤더
![2header](https://user-images.githubusercontent.com/67853616/155667278-bf9d9401-7f5d-4286-8256-0f360369831f.gif)
* `position: absolute,  width: 150px` 부여
*  `left` 속성 값 : 0과 100%을 통해 상대적인 위치 부여
* hover 유무에 따라 `display` 속성 값 : none, block을 통해 마우스 위치에 따라 등장하게 함
* 클릭하면 router 파라미터로 categoryId 값이 전달되어 해당 값으로 API GET 호출하고 리스트로 보여줌


### 2. List Page & Detail Page
### 2-1. 헤더 클릭시 책 목록 & 선택 기준 따른 정렬
![header_list](https://user-images.githubusercontent.com/67853616/155668244-51343e7f-83df-430a-add4-902d52aa1089.gif)
* useEffect의 dependency 값에 헤더에서 클릭한 메뉴값으로 설정해 API GET 요청을 날리도록 하고 목록 재랜더링
* [문제 상황] API 요청 쿼리에 정렬 부여 불가능
* [해결] 직접 Response JSON 내 특정 key의 value를 기준으로 element를 재배열하는 함수 작성
* 재배열이 정상적으로 처리되면 list 컴포넌트 재랜더링되도록 useEffect 사용

### 2-2. 검색 시 결과 목록
![detail_search](https://user-images.githubusercontent.com/67853616/155668747-f78c9d30-ff43-4ac1-8ec9-5e36a6af480b.gif)
* 헤더의 `input` 태그에 입력된 값으로 API GET 요청
* 검색 요청 쿼리 변경됨에 따라 useEffect 실행되며 목록 컴포넌트 재랜더링
* 사용자가 특정 책 클릭시 해당 책의 title, categoryId 가져옴
* GET Detail API에 필요한 searchType 쿼리 값을 부여하는 함수 작성
* 요청 파라미터가 다 갖춰지면 API로 상세 정보 받아오고 디테일 페이지도 이동
* 해당 책을 인터파크 페이지로 이동할 수 있도록 링크 연결


### 3. Signup


### 3-1. 정보 입력 값 조건 만족 여부에 시각화
![signup_valiation](https://user-images.githubusercontent.com/67853616/155672862-06814f1b-7299-45db-ad75-d9c3c4b606ec.gif)
* `<input>` 태그의 name과 value 속성 이용

```js
    <input className="signup_Pw_input"  placeholder="비밀번호를 입력해주세요"  maxLength="16"
    name="Pwd" type="text"  value={Pwd}
  onChange={onChange} onClick={onClick_Info} />
```   
*  change와 click 이벤트 발생에 핸드링 함수 작성
```js
//입력 값에 따른 상태 설정
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
//입력하고자 할 때 클릭했으니 조건 보여주기
 const onClick_Info = (e) => {
    console.log(e.target);
    let name = `show${e.target.name}Info`;
    setInputs({
      ...inputs,
      [name]: true,
    });
  };

```
* 회원가입 조건 검증해 true/false 반환하는 정규표현식 작성
* 반환되는 true/false 이용 + 삼항연산자로 class 명 부여
* class 명에 따른 색상 설정
```js
<li className={IsPassword(Pwd) ? "true" : "false"}>
```
### 3-2. DaumPostcode 이용한 주소 정보
![signup_address](https://user-images.githubusercontent.com/67853616/155673152-f6eb51b0-1bc2-4ed6-bb2c-474b4daf0140.gif)


**주소 입력 상태 따른 input**
<img width="483" alt="image" src="https://user-images.githubusercontent.com/67853616/155671820-c401164b-7a6a-489c-949c-3d855478f466.png">

* 주소 입력값이 없는 경우 버튼을 클릭해 `DaumPostcode`가 실행되도록 함
<img width="437" alt="image" src="https://user-images.githubusercontent.com/67853616/155671886-8eeea05f-9c86-4a92-ba15-1cc058f6fded.png">

* `DaumPostcode`가 POP으로 실행되고 대략적인 주소 검색으로 우편번호와 정확한 주소 받아옴
<img width="484" alt="image" src="https://user-images.githubusercontent.com/67853616/155671919-964d23d7-813d-4ed1-8b5b-a6dd2b063a15.png">

* 받아온 정확한 주소와 우편번호는 자동으로 `input`에 넣어줌
* 이미 받아온 주소가 있음으로 버튼에 문구는 주소 재검색으로 수정
* 마지막 칸에는 추가적인 동호수 입력

### 4. Login & User Profile
#### 카카오 소셜 로그인
![kakaologin](https://user-images.githubusercontent.com/67853616/155673585-d51da8c0-f009-48fe-b064-657b4c167ea0.gif)
<img width="404" alt="image" src="https://user-images.githubusercontent.com/67853616/155674304-b16701e5-b688-4b1e-9c2d-8956e9a3bdae.png">

* 카카오 로그인 성공해 user 정보를 **`crypto-js` 라이브러리 이용해 암호화 해** `localStorage`에 저장
* 유저 정보가 있는 경우 우측 상단에는 **로그인/회원가입이 아닌 유저이름/유저정보**가 뜨도록 함
* 내 정보 클릭 시 localStorage에 암호화되어 저장된 유저의 정보를 **복호화해 페이지에 보여줌**
* 로그아웃 시 locaStorage의 정보를 삭제하고 **유저이름/유저정보가 아닌 로그인/회원가입**이 뜨도록 함
