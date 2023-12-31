import styles from './styles.module.scss';
import defaultAvatar from '../../assets/images/default-avatar.svg';

const Avatar = () => {
  return (
    <div className={styles.imageContainer}>
      <section className={styles.wrapper}>
        <div className={styles.hoverOverlay}>
          <p className={styles.hoverText}>Change avatar</p>
        </div>
        <img className={styles.defaultImage} src={defaultAvatar} alt="Avatar" />
      </section>
    </div>
  );
};

export default Avatar;
