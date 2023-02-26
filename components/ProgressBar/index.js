export default function ProgressBar (props) {
    const { completed } = props;
  
    const containerStyles = {
      height: 15,
      width: '100%',
      borderRadius: 50,
      marginRight: 150,
      top: '0.3rem',
      position: 'relative'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed === 100 ? 102 : completed}%`,
      backgroundColor: '#cd2b31',
      borderRadius: 'inherit',
      textAlign: 'right',
      marginLeft: -1,
      transition: 'width 0.5s ease-in-out'
    }
  
    return (
      <div style={containerStyles} className={'bg-marvelBg'}>
        <div style={fillerStyles}>
        </div>
      </div>
    );
};
  