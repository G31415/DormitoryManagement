package com.example.springboot.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.springboot.entity.Admin;
import org.apache.ibatis.annotations.Mapper;

@Mapper

public interface AdminMapper extends BaseMapper<Admin> {
}
