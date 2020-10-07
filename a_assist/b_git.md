# 깃 이란 무엇인가?

git = 서버 = 웹 상의 = (웹)하드 = 클라우드 <br />

소프트웨어 개발 및 관리에서 자료를 버전/기간/작성내용 순서에 따라 문서를 관리하는 버전관리 시스템이라고 한다. <br />
이는 한사람이 혼자 작업을 진행할 수도 있지만, 하나의 데이터를 여러사람이 관리하여 처리할 수도 있다.

___
## 핵심 키워드

- git clone 깃 주소
- git config --global user.name "사용자이름"
- git config --global user.email "사용자이메일"
- git add  파일 또는 폴더명
- git commit -m "내용요약"
- git push
- git status
- git pull
- git reset HEAD^  / =ctrl+z (직전취소와 같은 기능)


___

## 깃 사용법 기초 1


1. 컴퓨터에 연결할 사용자의 계정을 등록한다 (사용자 이름, 이메일 주소) <br />
```shell
$ git config --global user.name "이름"
$ git config --global user.email "이메일"
git으로 시작하면 git과 관련된 명령어라고 생각해보자
```

$ touch b_git.md <br />
$ npm node package <br />
$ mkdir <br />
$ mv <br />
$ cp <br />
$ cd <br />

2. github 사이트에서 개인 저장소를 생성한다. <br />
- 사이트에서 먼저 만드는 것을 권장한다 'new repository' 를 클릭
- 이름 생성, 자료공개 여부(공개), readme 파일 생성여부 <br />

3. 내 컴퓨터에서 github 사이트에 있는 주소에 담긴 자료(주소를 복사해서 처리)를 그대로 복제한다. <br />

- 웹에 존재하는 github 저장소 이름이 내 컴퓨터에 폴더 명으로 저장되기 때문에 이름이 겹치지 않도록 주의 해야한다. <br />

```shell

$ git clone http:// ____________.git

```

4. 최초의 테스트 및 파일 인식은 `README.md` 파일 생성 후 내용 작성 <br />

```shell

$ touch README.md
$ echo "README파일 생성 및 체크" >> README.md

```

5. 선택 자료를 첨부 및 내용요약 작성 그리고 전송 <br />

```shell

$ git add 파일/폴더선택

$ git add * = 전체 추가
$ git commit -m "첨부되는 내용을 요약작성"
$ git push

```

6. 자료의 상태점검은 수시로 해야한다 <br />

```shell

$ git status

```

7. 혹여 다른 컴퓨터에도 clone되어 있는 상태라면, 서버의 자료를 업데이트로 설정해야 한다. <br />

```shell

$ git pull

```

---

git 컴퓨터 내 저장소 안에 꼭 추가로 파일을 만들어 데이터를 만든다. (아니면 .git 폴더안에서 계속 업데이트 됨)





---

---



삭제할 떄도 마찬가지이다

컴퓨터에 있는 파일을 삭제하고 github에서도 삭제를 원한다면



컴퓨터 저장소에 있는 해당 파일을 삭제 후,

gitbash로 `$git add 삭제된 파일명`을 적어서

-> 이것은 삭제해서 없어진 파일을 동기화 한다는 개념이다



so,

ex>

$git add index.html

-> deleted

여기서 또한 git commit으로 설명도 추가가 가능하다

예를들어 $git commit -m "삭제된파일"로 추가설명을 더한 뒤



git status로 상태를 확인하면

```bash
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    index.html
```

이런 내용으로써 해당파일은 삭제 되어진 것을 확인 할 수 있다



git push로 내보내기 하면 github 저장소의 내용도 사라지게 된다.