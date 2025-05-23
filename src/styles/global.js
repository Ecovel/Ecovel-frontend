import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,
small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,
aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,
nav,output,ruby,section,summary,time,mark,audio,video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    line-height: 140%;
    letter-spacing: -2.5%;
    font-family: ${({ theme }) =>
    theme.fonts.default["font-family"]};
}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,
nav,section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

button {
    background: inherit; 
    border:none; 
    border-radius:0;
    padding:0; 
    cursor:pointer;
    font-family: var(--mainfont);
    line-height: 150%;
}

a {
    color: inherit;
    text-decoration: none;
    outline: none;
}

a:visited {
    text-decoration: none;
    color: inherit;
}

input {
    -webkit-appearance: none; /* Safari and Chrome */
        -moz-appearance: none; /* Firefox */
            appearance: none;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
}

input:focus {
    outline: none;
}

@font-face {
    font-family: "Pretendard-Thin";
    src: url("/fonts/Pretendard-Thin.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-Light";
    src: url("/fonts/Pretendard-Light.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-Regular";
    src: url("/fonts/Pretendard-Regular.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-Medium";
    src: url("/fonts/Pretendard-Medium.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-SemiBold";
    src: url("/fonts/Pretendard-SemiBold.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-Bold";
    src: url("/fonts/Pretendard-Bold.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-ExtraBold";
    src: url("/fonts/Pretendard-ExtraBold.otf") format("opentype");
    font-style: normal;
}

@font-face {
    font-family: "Pretendard-Black";
    src: url("/fonts/Pretendard-Black.otf") format("opentype");
    font-style: normal;
}
`;

export default GlobalStyle;