import styles from "../../styles/Home.module.css";
const ViewData = ({ apiData }) => {
  const data = Object.entries(apiData);

  return (
    <>
      <div className={styles.main_style}>
        {data.map((d, index) => {
          const { artist, name, image, itemCount, author, icon, title } = d[1];
          return (
            <>
              <div className={styles.card} key={index}>
                <div className={styles.image_card}>
                  <img src={image} alt={name} />
                </div>
                <div className={styles.item_text}>
                  <div className={styles.title_head}></div>
                  {name}
                </div>
                <div className={styles.author}>{author}</div>

                <div style={{ flexDirection: "row" }}>
                  <img
                    className={styles.author}
                    width={30}
                    height={30}
                    src={icon}
                    alt={title}
                  ></img>
                  <div
                    className={styles.author}
                    style={{
                      marginLeft: "30px",
                      paddingTop: "10px",
                      color: "darkorchid",
                    }}
                  >
                    {artist}
                  </div>

                  <div
                    style={{
                      fontSize: 10,
                      justifyContent: "center",
                      marginLeft: "30px",
                      padding: "10px",
                    }}
                  >
                    {title}
                  </div>
                </div>
              </div>
            </>
          );
        })}
        ;
      </div>
    </>
  );
};
export default ViewData;
