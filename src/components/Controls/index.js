import './style.css';
import PlayIcon from '../../assets/play.svg'
import PauseIcon from '../../assets/pause.svg'
import NextIcon from '../../assets/next.svg'
import PreviusIcon from '../../assets/previous.svg'
import StopIcon from '../../assets/stop.svg'



export default function Controls({
    audioRef,
    currentMusic,
    iconBtn,
    setIconBtn,
    handleChangeMusic
}) {


    function playPause() {

        if (audioRef.current.paused) {
            audioRef.current.play();
            setIconBtn('pause');
            return;
        }

        audioRef.current.pause();
        setIconBtn('play')

    }
    return (
        <div className='container-controls'>
            <div className='preview-names'>
                <h>{currentMusic.title}</h>
                <strong>{currentMusic.artist}</strong>
            </div>

            <div className='container-player'>
                <div className='container-buttons'>
                    <img
                        src={StopIcon}
                        alt=""
                        className='btn-control'
                    />
                    <img
                        src={PreviusIcon}
                        alt=""
                        className='btn-control'
                        onClick={() => handleChangeMusic('previous')}
                    />
                    <img
                        src={iconBtn === 'pause' ? PauseIcon : PlayIcon}
                        alt=""
                        className='btn-play-pause'
                        onClick={() => playPause()}
                    />
                    <img
                        src={NextIcon}
                        alt=""
                        className='btn-control'
                        onClick={() => handleChangeMusic('next')}
                    />
                </div>
                <div className='container-progress'>
                    <strong className='start'>0</strong>
                    <div className='container-line'>
                        <div className='progress-line'>
                        </div>
                        <div className='progress-line-color'>
                        </div>
                    </div>
                    <strong className='end'> 3:45</strong>
                </div>
            </div>

            <div className='empty'>

            </div>
        </div>
    )
}