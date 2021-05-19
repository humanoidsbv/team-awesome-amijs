import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Bello Script';
        src: url(../fonts/Bello-Script/bello-script.ttf);
    }

    @font-face {
        font-family: 'ProximaNova';
        src: url(../fonts/Proxima-Nova/proxima-nova-regular.woff);
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'ProximaNova';
    }

    h1 {
        margin: 0;
        padding: 0;
    }

    p {
      margin: 0;
      padding: 0;
    }
    
    a {
      text-decoration: none;

      :active {
        color: inherit;
      }

      :visited {
        color: inherit;
      }
    }

		* {
			box-sizing: border-box;
		}
`;

export default GlobalStyle;
