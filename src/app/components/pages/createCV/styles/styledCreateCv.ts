import styled from "styled-components";

export const StyledCreateCv = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;


  .MuiTextField-root {
    margin: 5px;
  }

  .title {
    font-size: 20px;
    font-family: sans-serif;
    text-align: center;
  }

  .textArea {
    width: 100%;
  }
.saveButton {
  background-color:  #deb887;
  &:hover {
    background-color: #ecef35;
  }
}
  .personalDetailsWrapper {
    display: flex;
    .avatarWrapper{
      padding-top: 10px;
      padding-left: 10px;
      display: flex;
      flex-wrap: wrap;
      .stylesBox {
        width:500%;
        .logoLabel {
          cursor: pointer;
          .avatar {
            width: 200px;
            height: 200px;
            padding: 10px;
            margin-bottom: 10px;
          }
        };
        .logoInput {
          display: none;
        }
      };
      .editorWrapper {
        display: block
      }
    }
  }

  

`