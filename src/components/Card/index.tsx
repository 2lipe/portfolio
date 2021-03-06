import styled from 'styled-components';

import { WithTheme } from 'models/interfaces';

type CardProps = WithTheme;
type CardDescriptionProps = WithTheme;
type CardTitleProps = WithTheme;

export const Card = styled.div<CardProps>`
  width: auto;
  min-width: 100px;
  max-width: 200px;
  height: auto;
  min-height: 100px;
  max-height: 200px;
  margin: 0px 8px;

  @media (min-width: ${({ theme }: CardProps) => theme.breakpoints.md}) {
    height: 150px;
    max-width: 300px;
  }

  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }: CardProps) => theme.colors.typography.dark};
  transition: background-color 500ms;
  position: relative;
  flex: 0 0 auto;

  &:hover {
    background-color: ${({ theme }: CardProps) => theme.colors.primary.darker};
  }
`;

export const CardTitle = styled.h3<CardTitleProps>`
  font-weight: 600;
  font-size: ${({ theme }: CardTitleProps) => theme.fontSizes.default};
  color: ${({ theme }: CardTitleProps) => theme.colors.white};
`;

export const CardDescription = styled.p<CardDescriptionProps>`
  margin-top: 4px;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: ${({ theme }: CardDescriptionProps) => theme.fontSizes.extraSmall};
  color: ${({ theme }: CardDescriptionProps) => theme.colors.typography.main};
  max-width: 80%;
  word-wrap: break-word;
`;
