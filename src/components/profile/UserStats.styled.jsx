import styled from '@emotion/styled';

export const UserActivity = styled.ul`
  display: flex;

  font-size: 14px;
  margin: 0;
  padding: 0;
  border-top: 1px solid grey;
  list-style: none;
`;

export const UserActivityItem = styled.li`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 18px 5px 18px 5px;
  background-color: rgba(0, 0, 0, 0.1);
  color: rgb(117, 117, 117);
  &:not(:last-child) {
    border-right: 1px solid grey;
  }
`;

export const ActivityTitle = styled.span`
  margin-bottom: 5px;
`;

export const ActivityValue = styled.span`
  color: rgb(0, 0, 0);
  font-weight: 700;
`;
