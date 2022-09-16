import {QRCodeSVG} from 'qrcode.react'
import {useState} from 'react'


 const StudentProfile = () => {
  const [QrId, setQrId] = useState(null);
  return (
    <div>
    <QRCodeSVG value="Hello World"/>
    </div>
    )
}

export default StudentProfile;