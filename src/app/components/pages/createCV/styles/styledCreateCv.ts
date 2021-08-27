import styled from "styled-components";

export const StyledCreateCv = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;


  .MuiTextField-root {
    margin: 5px;
  }

  div[role="tabpanel" ] {
    width: 75%;
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
    float: right;
    background-color: #deb887;
    margin: 20px 0;

    &:hover {
      background-color: #ecef35;
    }
  }

  .tabPanel {
    width: 800px;
    margin: 0 auto;
  }

  .personalDetailsWrapper {
    display: flex;

    input {
      width: 250px;
    }

    .firstInputWrapper {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;

      .avatarWrapper {
        padding-top: 10px;
        padding-left: 10px;
        display: flex;
        flex-wrap: wrap;

        .stylesBox {
          .logoLabel {
            cursor: pointer;

            .avatar {
              width: 200px;
              height: 200px;
              padding: 10px;
              margin-bottom: 10px;
              border-radius: 0px;
            }
          }
        ;

          .logoInput {
            display: none;
          }
        }
      ;

        .editorWrapper {
          display: block
        }
      }

      .firstColumn {
        display: flex;
        flex-direction: column;
      }
    }

    .inputWrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .infoTitle{
        font-size: 18px;
        margin-top: 15px;
        font-family: sans-serif;
      }
.infoWrapper{
  display: flex;
  justify-content: space-around;
}
      .dataPicker {
        width: 250px;
        color: red;
      }
    }
  }

`