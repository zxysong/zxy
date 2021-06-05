<template>
  <div>
    <base-breadcrumb :list="touterList"></base-breadcrumb>
    <div class="content">
      <div style="padding-top: 28px">请填写考试大纲相关信息</div>
      <div>
        <div class="clear">
          <el-button size="small" class="fr btn" @click="back">返回</el-button>
        </div>
        <el-form label-width="120px" :model="form" ref="form" :rules="rules">
          <el-row :gutter="20">
            <el-col :span="8"
              ><el-form-item label="考试大纲标题" prop="previousTitle">
                <el-input
                  v-model="form.previousTitle"
                ></el-input> </el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item
                label="考试大纲分类"
                prop="subjectType"
                placeholder="请选择"
              >
                <el-select v-model="form.subjectType">
                  <el-option
                    v-for="item in typeOptions"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16"
              ><el-form-item label="考试大纲封面" prop="coverPicUrl">
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
                    v-if="coverPicUrl"
                    :src="`http://47.96.139.20${coverPicUrl}`"
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
              ><el-form-item label="考试大纲描述" prop="description">
                <el-input v-model="form.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16"
              ><el-form-item label="考试大纲内容" prop="contextPicUrl">
                <el-upload
                  class="avatar-uploader"
                  action="http://47.96.139.20:8200/adult-exam/app/picture/fileUpload"
                  list-type="picture-card"
                  :auto-upload="true"
                  :multiple="false"
                  :accept="'image/*'"
                  :on-success="handleAvatarSuccess1"
                  :before-upload="beforeAvatarUpload"
                  :data="uploadData"
                  :headers="uploadData.token"
                >
                  <img
                    v-if="contextPicUrl"
                    :src="`http://47.96.139.20${contextPicUrl}`"
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
import { addQuestionInfo, updateQuestionInfo, pictureShow } from "@/http";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      touterList: [
        { name: "试题管理" },
        { name: "考试大纲" },
        { name: "考试大纲练习" },
      ],
      typeOptions: ["大学语文", "高等数学", "大学英语"],
      coverPicUrl: "",
      contextPicUrl: "",
      uploadData: {
        code: "other",
        token: {
          token: "",
        },
      },
      form: {
        previousTitle: "",
        coverPicUrl: "",
        contextPicUrl: "",
        description: "",
        subjectType: "",
      },
      rules: {
        previousTitle: [
          { required: true, message: "请输入动态标题", trigger: "blur" },
        ],
        subjectType: [
          { required: true, message: "请选择分类", trigger: "blur" },
        ],
        coverPicUrl: [
          { required: true, message: "请上传图片", trigger: "blur" },
        ],
        description: [
          { required: true, message: "请输入动态描述", trigger: "blur" },
        ],
        contextPicUrl: [
          { required: true, message: "请上传图片", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.uploadData.token = {
      token: localStorage.getItem("token"),
    };
    this.form = Object.assign({}, this.form, this.addQuestionObj);
    this.coverPicUrl = this.addQuestionObj.coverPicUrl;
    this.contextPicUrl = this.addQuestionObj.contextPicUrl;
    console.log(this.form);
  },
  methods: {
    ...mapMutations(["clearAddQuestion"]),
    handleAvatarSuccess(response, file, list) {
      if (list.length > 1) {
        list.shift();
      }
      this.coverPicUrl = "";
      this.form.coverPicUrl = response?.entry?.fileNameNew || "";
    },
    handleAvatarSuccess1(response, file, list) {
      if (list.length > 1) {
        list.shift();
      }
      this.contextPicUrl = "";
      this.form.contextPicUrl = response?.entry?.fileNameNew || "";
    },
    beforeAvatarUpload() {},
    addpic() {},
    back() {
      this.clearAddQuestion();
      this.$router.back();
    },
    addtest() {
      this.$refs["form"].validate(async (valid) => {
        if (valid) {
          let userName = localStorage.getItem("userName");
          let params = {
            ...this.form,
            createdBy: userName,
          };
          params.questionType = "历年真题";
          params.publishTime = this.getTime();
          let res;
          if (params.id) {
            res = await updateQuestionInfo(params);
          } else {
            res = await addQuestionInfo(params);
          }
          this.clearAddQuestion();
          if (res.status === true) {
            this.$message({
              message: "操作成功",
              type: "success",
            });
            this.$router.push({
              path: "themeYear",
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
    picShow(url) {
      pictureShow({ fileName: url }).then((res) => {
        // this.form.coverPicUrl = res;
        // let obj = {
        //   url: res,
        // };
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
    ...mapState(["addQuestionObj"]),
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