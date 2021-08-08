import Preloader from "../Preloader/Preloader";
import cl from './Profile.module.scss';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  let randomNumber = Math.floor(Math.random() * props.defaultUserImg.length);

  return (
      <div className={cl.profileInfo}>
        <div className={cl.header}>
          <img className={cl.userImage} src={props.profile.photos.large || props.defaultUserImg} />
          <div className={cl.editPhotoButton}>edit photo</div>
            <div className={cl.userName}>{props.profile.fullName}</div>
            <ProfileStatus status={props.status} userId={props.match.params.userId}
                           updateStatus={props.updateProfileStatus}/>
        </div>
          <div className={cl.profileInformation}>
              <div className={cl.point}>
                  <div className={cl.name}>Instagram: </div>
                  <div className={cl.value}>nfkjbdsbdjb</div>
              </div>
              <div className={cl.point}>
                  <div className={cl.name}>Facebook: </div>
                  <div className={cl.value}>nfkjbdsbdjb</div>
              </div>
              <div className={cl.point}>
                  <div className={cl.name}>Twitter: </div>
                  <div className={cl.value}>nfkjbdsbdjb</div>
              </div>
              <div className={cl.point}>
                  <div className={cl.name}>FindingJob: </div>
                  <div className={cl.value}>nfkjbdsbdjb</div>
              </div>
              <div className={cl.editInformationButton}>edit profile information</div>
          </div>
      </div>
  );
};

export default ProfileInfo;
