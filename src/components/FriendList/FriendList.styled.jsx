import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 60px 0;
`;

export const Friend = styled.li`
  display: flex;

  align-items: center;

  width: 200px;
  height: 60px;
  padding: 0 10px;

  border-radius: 10px;

  background-color: rgb(256, 256, 256);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 10px;

  border-radius: 50%;
  background-color: ${props =>
    props.status ? 'rgb(0, 256, 0);' : 'rgb(256, 0, 0);'};
`;
export const Avatar = styled.img`
  margin-right: 10px;
  width: 48px;

  background-color: rgb(155, 208, 226);
  border-radius: 6px;
`;
export const Name = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
`;
