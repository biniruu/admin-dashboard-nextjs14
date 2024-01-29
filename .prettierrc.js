/**
 * Options
 * {@link https://prettier.io/docs/en/options.html}
 *
 * arrowParens : 인자가 한 개인 화살표 함수 사용 시 괄호 사용 여부. e.g. const add = num => 1 + num
 * endOfLine : delete 'cr' prettier/prettier 오류를 피하기위해 윈도우 유저에게 필요한 부분
 * htmlWhitespaceSensitivity : 태그 양옆에 있는 띄어쓰기를 의미 있는 것으로 여길지 여부
 * printWidth : 한 줄에 쓸 수 있는 문자 개수
 * semi : 코드 마지막에 세미콜론을 붙일지 여부
 * singleQuote : 따옴표 사용 시 작은따옴표로 통일
 * tabWidth : 탭 키 간격으로 설정할 space 개수
 * tailwindConfig : tailwind 설정 파일이 .prettierrc 파일과 다른 경로에 있을 때 tailwind 설정 파일 위치를 prettier-plugin-tailwindcss에 알려준다.
 * trailingComma
 * vueIndentScriptAndStyle : vue 파일 내 script 태그와 style 태그에서 들여쓰기 반영
 */

module.exports = {
  arrowParens: 'avoid',
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  // tailwindConfig: './tailwind.config.js',
  trailingComma: 'all',
  vueIndentScriptAndStyle: true,
}
