# 웹퍼블리셔과정

# 20200727~20201218

1. git 계정 생성하기

# git 사용법

1. github 가입
2. new repository 생성
3. git 자료를 복제
   - 내 컴퓨터에서 git clone 생성한 repository

1. README.md 파일을 생성 및 내용 작성

2. 보내기 전에 정확한 계정 연결

   1. 자료를 올리는 사람의 이름과 이메일 주소
   2. 대상 계정의 ID/PW github로

3. push 처리하여 보내기

4. github의 자료를 pull처리하여 가져오기

5. `$ git config`

   **`--global` 은 최초에 한번만 사용한다.

   `$ git config --global user.name "soo330"` 사용자 이름 등록

   `$ git config --global user.email "soo330"` 이메일 등록

___

# 택배보내는 순서

1. 물건을 포장한다

   `$ git add README.md` 

   README.md라는 상태로 물건을 보내겠다는 내용 (포장단계)

2. 상자에 담는다 

   `$ git status` (현재상태 확인)

3. 우체국에 간다 (master폴더에 들어왔다)

4. 송장을 작성 (주소 , 이름, 연락처, 우편번호, `물건의 내용`)

   `$ git commit -m "생성을 위한 첫 파일"`

5. 돈내고 보낸다.

   `$ git push` 를 치면 github 로그인 페이지가 나옴

___

# 정리

1. github 가입

2. `$ git config --global user.name "사용자 이름"`

   `$ git config --global user.email "사용자 이메일"`

   - ID 로그아웃시 

      ###### 제어판>사용자계정>자격증명관리>window 자격증명>일반 자격 증명 > github 자격 "제거"

3. 저장소 생성

   1. `git clone "주소"` 저장소의 내용을 카피해서 담는다 *첫 한번만 사용
      - `$ git status`
   2. `$ git add` 파일/ 폴더 (보내기 전에 설명을 단다)
      - `$ git status`
   3.  `$ git commit -m "설명"`
      - 한번도 올린 적이 없다면 빨강색으로 뜨고 , 있었던 내용이라면 초록색으로 뜬다 
      - `$ git status`

   4. `$ git push`업로드 

4. ### `$ git status` 모든 작업 앞뒤 수시로



* 한번에 100mb이상 파일 업로드 불가

- 한번에 100개 파일 업로드 불가