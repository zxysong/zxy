<template>
  <div>
    <base-breadcrumb :list="touterList"></base-breadcrumb>
    <div class="content">
      <div style="padding-top: 28px">请填写轮播图相关信息</div>
      <div>
        <div class="clear">
          <el-button size="small" class="fr btn" @click="back">返回</el-button>
        </div>
        <el-form label-width="120px" :model="form" ref="form" :rules="rules">
          <el-row :gutter="20">
            <el-col :span="8"
              ><el-form-item label="轮播图名称" prop="slideshowTitle">
                <el-input
                  v-model="form.slideshowTitle"
                ></el-input> </el-form-item
            ></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16"
              ><el-form-item label="轮播图素材" prop="slideshowPicUrl">
                <el-upload
                  class="avatar-uploader"
                  action="http://47.96.139.20:8200/adult-exam/app/picture/fileUpload"
                  list-type="picture-card"
                  :auto-upload="true"
                  :multiple="false"
                  :accept="'image/*'"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                  :data="uploadData"
                  :headers="uploadData.token"
                >
                  <img
                    v-if="slideshowPicUrl"
                    :src="`http://47.96.139.20${scope.row.slideshowPicUrl}`"
                    class="avatar"
                  />
                  <i
                    class="el-icon-plus avatar-uploader-icon"
                    @click="addpic"
                  ></i>
                  <div style="text-align: center">上传照片</div>
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过2M
                  </div>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"
              ><el-form-item label="轮播图说明" prop="description">
                <el-input v-model="form.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16"
              ><el-form-item label="轮播图链接" prop="slideshowPicLink">
                <el-input v-model="form.slideshowPicLink"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <el-button
          size="small"
          class="btn"
          @click="addtest"
          style="margin-left: 120px"
          >立即添加</el-button
        >
        <el-button size="small" @click="back">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { addSlideshow, editEnrollment, pictureShow } from "@/http";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      touterList: [{ name: "轮播图" }, { name: "添加轮播图" }],
      typeOptions: ["热门推荐", "开课公告", "备考资讯"],
      slideshowPicUrl: "",
      uploadData: {
        code: "exam",
        token: {
          token: "",
        },
      },
      form: {
        slideshowTitle: "",
        slideshowPicUrl: "",
        description: "",
        slideshowPicLink: "",
      },
      rules: {
        slideshowTitle: [
          { required: true, message: "请输入动态标题", trigger: "blur" },
        ],
        slideshowPicUrl: [
          { required: true, message: "请上传图片", trigger: "blur" },
        ],
        description: [
          { required: true, message: "请输入动态描述", trigger: "blur" },
        ],
        slideshowPicLink: [
          { required: true, message: "请输入动态内容", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.uploadData.token = {
      token: localStorage.getItem("token"),
    };
    this.form = Object.assign({}, this.form, this.picLunObj);
    this.slideshowPicUrl = this.picLunObj.slideshowPicUrl;
  },
  methods: {
    ...mapMutations(["clearAddPic"]),
    handleAvatarSuccess(response, file, list) {
      if (list.length > 1) {
        list.shift();
      }
      this.slideshowPicUrl = "";
      this.form.slideshowPicUrl = response?.entry?.fileNameNew || "";
    },
    beforeAvatarUpload() {},
    addpic() {},
    back() {
      this.clearAddPic();
      this.$router.back();
    },
    addtest() {
      this.$refs["form"].validate(async (valid) => {
        if (valid) {
          let params = {
            ...this.form,
          };
          params.enrollmentType = "招生专业";
          params.publishTime = this.getTime();
          let res;
          if (params.id) {
            res = await editEnrollment(params);
          } else {
            res = await addSlideshow(params);
          }
          this.clearAddPic();
          if (res.status === true) {
            this.$message({
              message: "操作成功",
              type: "success",
            });
            this.$router.push({
              path: "admincar",
            });
          }
        } else {
          this.$message({
            message: "您有内容未填写",
            type: "warning",
          });
          return false;
        }
      });
    },
    getTime() {
      let data = new Date();
      let y = data.getFullYear();
      let m = data.getMonth() + 1;
      let d = data.getDate();
      return `${y}年${m >= 10 ? m : "0" + m}月${d >= 10 ? d : "0" + d}日`;
    },
  },
  computed: {
    ...mapState(["picLunObj"]),
  },
};
</script>
<style lang="less" scoped>
.pagination {
  text-align: right;
  text-align: right;
  padding-right: 0;
  margin-bottom: 30px;
  margin-top: 18px;
}
.btn {
  background-color: #38a28a;
  color: #fff;
  margin-bottom: 18px;
}
/deep/.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
/deep/.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 80px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>