package com.example.springboot.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.springboot.entity.DormRoom;
import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface DormRoomMapper extends BaseMapper<DormRoom> {

}