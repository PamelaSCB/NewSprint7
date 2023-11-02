import styled from "styled-components";

export const Container=styled.div `
background-color: #000;
display:flex; 
justify-content: center;
align-items: center;
border-style: solid;
border-color: #444; 
border-width: 0.1rem 0;

ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;
}

li{
    text-align: center;
    padding: 1rem 1.75rem;
    border-style: solid;
    border-color:#444;
    border-width: 0 0.1rem;
}
li:nth-child(1){
    width: 8rem;
}
li:nth-child(2){
    width: 10.5rem;
}
.link {
    display:inline; 
    text-align: center;
    text-decoration: none;
    font-size: 1.3rem;
    color:#777;
}
.active {
    border-bottom:0.2rem solid #0d66d7;
}
.active .link{
    color: #eef;
    font-weight: 600;
}
@media (max-width:768px) {
    .link {
        font-size: 1rem;
    }
    li {
        padding: 0.75rem 1rem;
    }
    li:nth-child(1){
        width: 6.5rem;
    }
    li:nth-child(2){
        width: 9rem;
    }
}
`; 
// amplada: {
//     tauleta: "768px",
//     movil: "480px"
//   },
//   colors: {
//     fons: "#111",
//     fonsFosc: "#000",
//     vora: "#ccc",
//     divisor: "#444",
//     lletraGlobal: "#eef",
//     deshabilitat: "#777"
