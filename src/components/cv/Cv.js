import Pdf from '../../assets/Oliver Bourne CV.pdf';

export default function Cv() {
  
    return (
      <div>
          <embed src={Pdf} className="full-height" />
      </div>
    );
  }  