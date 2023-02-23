import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const ArticleList = styled.ul`
  margin-bottom: -40px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;

  position: relative;

  @media (min-width: ${theme.screenSizes.tablet}) {
    margin: 0;

    display: grid;
    grid-template-columns: 335px 335px;
    column-gap: 32px;
    row-gap: 60px;
    margin-bottom: -60px;
  }

  @media (min-width: ${theme.screenSizes.desktop}) {
    display: grid;
    grid-template-columns: 395px 395px 395px;
    padding-bottom: 200px;
  }

  &:empty::before {
    content: '...Sorry, no news was found.';
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 18px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ArticleItem = styled.li`
  margin-bottom: 40px;

  @media (min-width: ${theme.screenSizes.tablet}) {
    margin-bottom: 0;
  }
`;
