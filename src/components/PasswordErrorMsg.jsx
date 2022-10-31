const PasswordErrorMsg = () => {
  return (
    <>
      <h3>Password must contain the following :</h3>
      <li>A lowerecase letter</li>
      <li>A uppercase letter</li>
      <li>A number</li>
      <li>A special characters like <br/>!, @, ., #, $, %, &, *, -</li>
      <li>Minimum 8 characters and maximum 16 characters</li>
    </>
  );
};

export default PasswordErrorMsg;