
//DBJoinList.js����DBJoinList�R���|�[�l���g���C���|�[�g����
import DBJointList from "./DBJoinList"

//DBJoinInsert.js����DBJoinListInsert�R���|�[�l���g���C���|�[�g����
import DBJoinInsert from "./DBJoinInsert";

//react����useState���C���|�[�g���A�g����悤�ɂ���
import {useState} from 'react';

//DBJoin�֐���錾����
function DBJoin(){

    //�ϐ�TFChange�A�ϐ����X�V����֐�setTFChange��錾���A�ϐ��̏����l��false��ݒ肷��
    const [TFChange,setTFChange] = useState(false)

    //handleTFChange�֐���錾����
    const handleTFChange = () =>{

        //1000ms���setTimeout���̏��������s����
        setTimeout(async ()=>{

            //�����Ɍ��݂̏�Ԃ𔽓]�������l��p����setTFChange�֐������s����
            setTFChange(prev => !prev);
        },1000)
        
    }

    //return���̏�����Ԃ�(��ɉ�ʏ�ɕ\�������html��)
    return(

        <>
            {/* DBJoinInsert�R���|�[�l���g���̈���Update��handleTFChange�֐���n��(Props:�ʃR���|�[�l���g�Ƀf�[�^��n��) */}
            <DBJoinInsert Update={handleTFChange}/>
            {/* DBJoinList�R���|�[�l���g���̈���TFChange��TFChange��n��(Props) */}
            <DBJointList TFChange={TFChange}/>
        </>
    )
}

//DBJoin�֐�����v�R���|�[�l���g(DBJoin.js�̑�\�R���|�[�l���g)�Ƃ��ăG�N�X�|�[�g����
export default DBJoin;