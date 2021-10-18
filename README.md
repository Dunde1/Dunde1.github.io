# Dunde's GitHub React blog
- React를 이용해 만든 Github blog 입니다.
- [블로그](https://dunde1.github.io/)

## 제작 과정
- `npx create-react-app {repository}` 명령어로 react app 생성.
- `package.json` 파일 수정.

    ```
    ...
    "scripts": {
        ...
        "predeploy": "npm run build",   //추가
        "deploy": "gh-pages -d build"   //추가
    },
    ...
    "homepage": "http://{GITHUB_ID}.github.io/"  //추가
    }
    ```

- `npm run deploy` 명령어 실행.
    - 앞으로 이 명령어를 통해 업데이트 후 최신버전으로 바꾸어 주면 된다.
- github repository에서 `Settings → Pages → Source`에서 `Branch: gh-pages` `/(root)` 설정 후 Save
