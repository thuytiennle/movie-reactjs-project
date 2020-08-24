import {
  Box,
  Paper,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core';
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../../../../components/Footer';
import news from '../news.json';

const useStyles = makeStyles(() => ({
  wrapper: {
    borderRadius: 'unset',
    padding: '50px 0',
  },
}));

function DetailNews() {
  const [newsSelected, setNewsSelected] = React.useState({});
  const { newsId } = useParams();
  const classes = useStyles();

  // Did update
  React.useEffect(() => {
    const index = news.findIndex((item) => item.id === newsId);
    if (index !== -1) {
      setNewsSelected(news[index]);
    }
  }, [newsId]);

  return (
    <Box marginTop="68px">
      {newsSelected && (
        <Paper className={classes.wrapper}>
          <Container>
            <Typography variant="h5" color="secondary">
              {newsSelected.title}
            </Typography>
            <div style={{ marginTop: 20 }}>
              <Typography style={{ paddingBottom: 10 }} variant="body1">
                Từ một bộ phim chẳng mấy được kỳ vọng, Wonder Woman trở thành
                điểm sáng của vũ trụ điện ảnh DC mở rộng giữa mớ tác phẩm bị
                giới chuyên môn “gạch đá” nặng nề - Batman v Superman: Dawn Of
                Justice, Suicide Squad và Justice League. Chẳng những các nhà
                phê bình khen ngợi, nữ thần chiến binh Diana Prince còn chiếm
                trọn cảm tình khán giả, cô giúp nhà sản xuất thu về hơn 821
                triệu $ từ kinh phí 149 triệu $.
              </Typography>
              <Typography style={{ paddingBottom: 10 }} variant="body1">
                Wonder Woman 2017 đưa khán giả trở về giai đoạn Thế Chiến Thứ
                Nhất. Chàng phi công trẻ Steve Trevor vô tình lạc đến vùng đất
                Amazon biệt lập và thay đổi cuộc đời nàng công chúa Diana nơi xứ
                sở ấy mãi mãi. Chàng dẫn Diana đến với thế giới đầy hận thù và
                khói lửa chiến tranh, giúp nàng khám phá ra sứ mệnh của đời
                mình. Và cuối cùng, chàng hy sinh một cách anh hùng.
              </Typography>
              <Typography style={{ paddingBottom: 10 }} variant="body1">
                Rất nhiều năm sau, Diana Prince không còn là cô gái vác kiếm đi
                lung tung giữa vũ hội, nay nàng là nữ thần công lý Wonder Woman,
                che giấu thân phận hoàn hảo. Giữa lúc bình yên ấy, bằng cách nào
                đó, Steve Trevor xuất hiện.
              </Typography>
              <Typography style={{ paddingBottom: 10 }} variant="body1">
                Bí ẩn gì đằng sau việc Steve chết đi sống lại? Đây là âm mưu
                nhắm vào Wonder Woman? Tất cả hãy còn rối rắm. Khán giả chỉ biết
                rằng, ở năm 1984 này, nữ thần sẽ phải đối đầu với ít nhất hai kẻ
                thù – Max Lord và Cheetah.
              </Typography>
              <Typography style={{ paddingBottom: 10 }} variant="body1">
                Có rất nhiều đồn đoán về sự hồi sinh kỳ lạ ấy. Từng có giả thiết
                cho rằng, Wonder Woman 1984 sẽ học theo phim truyền hình cùng
                tên – đây không phải Steve Trevor mà là con anh ta. Tuy nhiên,
                từ những gì xảy ra trong trailer, khả năng đó bị bác bỏ. Có thể
                anh du hành vượt thời gian, chứng minh qua việc Steve ngơ ngác
                với vật dụng thời hiện đại. Khả năng cao hơn, Steve này là do
                phản diện tạo ra để ám hại Diana.Dù sao, cả đạo diễn Patty
                Jenkins và Gal Gadot đều khẳng định sự trở lại của Steve rất
                quan trọng. Là đứa con phải được cưng chiều nhưng số phận Wonder
                Woman 1984 khá là lận đận. Tính đến nay bộ phim đã trì hoãn quá
                nhiều lần. Ban đầu, bộ phim dự kiến ra mắt vào 13.12.2019, sau
                bị đẩy lên 1.11.2019, rồi dời sang 5.6.2020. Vì tình hình dịch
                bệnh Covid 19, lịch chiếu đổi thành 14.08.2020. Mới nhất, phim
                ấn định thành 02.10.2020.
              </Typography>
              <Box display="flex" marginY="20px" justifyContent="center">
                <img
                  style={{ maxWidth: 600, maxHeight: 400 }}
                  src={newsSelected.img}
                  alt=""
                />
              </Box>
              <Typography style={{ paddingBottom: 10 }} variant="body1">
                Rất nhiều năm sau, Diana Prince không còn là cô gái vác kiếm đi
                lung tung giữa vũ hội, nay nàng là nữ thần công lý Wonder Woman,
                che giấu thân phận hoàn hảo. Giữa lúc bình yên ấy, bằng cách nào
                đó, Steve Trevor xuất hiện.
              </Typography>
              <Typography style={{ paddingBottom: 10 }} variant="body1">
                Bí ẩn gì đằng sau việc Steve chết đi sống lại? Đây là âm mưu
                nhắm vào Wonder Woman? Tất cả hãy còn rối rắm. Khán giả chỉ biết
                rằng, ở năm 1984 này, nữ thần sẽ phải đối đầu với ít nhất hai kẻ
                thù – Max Lord và Cheetah.
              </Typography>
              <Typography style={{ paddingBottom: 10 }} variant="body1">
                Có rất nhiều đồn đoán về sự hồi sinh kỳ lạ ấy. Từng có giả thiết
                cho rằng, Wonder Woman 1984 sẽ học theo phim truyền hình cùng
                tên – đây không phải Steve Trevor mà là con anh ta. Tuy nhiên,
                từ những gì xảy ra trong trailer, khả năng đó bị bác bỏ. Có thể
                anh du hành vượt thời gian, chứng minh qua việc Steve ngơ ngác
                với vật dụng thời hiện đại. Khả năng cao hơn, Steve này là do
                phản diện tạo ra để ám hại Diana.Dù sao, cả đạo diễn Patty
                Jenkins và Gal Gadot đều khẳng định sự trở lại của Steve rất
                quan trọng. Là đứa con phải được cưng chiều nhưng số phận Wonder
                Woman 1984 khá là lận đận. Tính đến nay bộ phim đã trì hoãn quá
                nhiều lần. Ban đầu, bộ phim dự kiến ra mắt vào 13.12.2019, sau
                bị đẩy lên 1.11.2019, rồi dời sang 5.6.2020. Vì tình hình dịch
                bệnh Covid 19, lịch chiếu đổi thành 14.08.2020. Mới nhất, phim
                ấn định thành 02.10.2020.
              </Typography>
            </div>
          </Container>
        </Paper>
      )}
      <Footer />
    </Box>
  );
}

export default memo(DetailNews);
