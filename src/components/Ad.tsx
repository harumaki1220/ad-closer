import SimpleAd from './SimpleAd';
import AnnoyingAd from './AnnoyingAd';

type AdProps = {
    id: number
    type: 'simple' | 'annoying'
    top: number
    left: number
    onClose: (id: number) => void
}

function Ad({ id, type, top, left, onClose }: AdProps) {
    switch (type) {
        case 'annoying':
            return <AnnoyingAd top={top} left={left }onClose={() => onClose(id)}/>
        case 'simple':
        default:
            return <SimpleAd id={id} top={top} left={left} onClose={() => onClose(id)}/>
    }
}

export default Ad;