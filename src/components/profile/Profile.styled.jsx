import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 250px;
  height: 320px;
  margin-bottom: 60px;

  border-radius: 4px;
  border: 1px solid grey;
  background-color: rgb(255, 255, 255);
  text-align: center;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  font-size: 14px;

  color: rgb(117, 117, 117);
`;
export const UserTag = styled.p`
  margin: 0 0 15px 0;
`;
export const UserLocation = styled.p`
  margin: 0;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50% 50%;
  background-color: rgb(21, 134, 134);
  margin-bottom: 20px;
`;
export const UserName = styled.p`
  margin: 0 0 15px 0;
  font-weight: 700;
  font-size: 20px;

  color: rgb(0, 0, 0);
`;
