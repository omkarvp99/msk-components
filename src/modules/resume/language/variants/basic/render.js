import React from 'react';

const useStyles = (theme) => ({
  root: {
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  lang: {
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    fontSize: 15,
    display: 'inline-block'
  }
});

const Basic = ({ theme, headlineText, langs }) => {
  const styles = useStyles();
  return (
    <div style={styles.root}>
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      <br />
      <div>
        {langs.value.map((lang) => {
          return (
            <div
              key={lang.value}
              style={{
                ...styles.lang,
                backgroundColor: theme.value.color,
                color: theme.value.contrast
              }}
            >
              {lang.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basic;
