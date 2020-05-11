const Main = ({bg, children}) => {
  const styles = {
    backgroundColor: bg
  };
    return (
      <>
        <div className="main" style={styles}>{children}</div>
        <style jsx>
          {`
            .main {
              width: 100%;
              height: 92vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </>
    );
}

export default Main;