import React, { Props } from 'react';

interface IUser {
    name: string;
    email: string;
  }
  

interface IProps {
    user: IUser;
}
const User: React.FC<IProps> = ({ user }) => {
    return (
        <div>
            <strong>
                Name: 
            </strong> { user.name }
        </div>
    )
}

export default User;