import styled from 'styled-components';

function Link(props) {
  const StyledLink = styled.a`
  color:white;
  text-decoration:none;
  font-size:12px;
  margin-left:10px;
  &:before{
    content:'|';
    margin-right:10px;
    color:#5292C1;
  }
  `;

  return (
    <li style={{ listStyle: 'none' }}>
      <StyledLink {...props} >{props.children}</StyledLink>
    </li >
  );
}
export default Link;