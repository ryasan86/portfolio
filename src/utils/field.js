import { css } from 'styled-components';
import { lighten } from 'polished';

const field = css`
  background: ${({ theme }) => theme.light};
  padding: 2%;
  border: none;
  outline: none;
  margin: 2px 0;
  color: ${({ theme }) => theme.mainFontColor};
  ::placeholder {
    color: ${({ theme }) => lighten(0.15, theme.mainFontColor)};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => lighten(0.15, theme.mainFontColor)};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => lighten(0.15, theme.mainFontColor)};
  }
`;

export { field };
