import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './BlogCardStyle';

const BlogCard = () => {
  return (
    <View style={styles.blogContainer}>
      <View style={styles.blogView}>
        <Text style={styles.blogTopText}>Learn with ETMONEY blog</Text>
        <Text style={styles.blogTopTextRight}>Read our blog</Text>
      </View>
      <View style={styles.blogFunImageView}>
        <Image source={require('../../assets/smiley.png')} />
      </View>
      <View style={styles.blogFunView}>
        <Text style={styles.blogFunTopText}>
          Watch this space for Fun Facts!
        </Text>
        <Text style={styles.blogFunBottomText}>
          {"Here you'll get some cool insight \n about your spends. Stay tuned"}
        </Text>
      </View>
    </View>
  );
};

export default BlogCard;
