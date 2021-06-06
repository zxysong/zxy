<template>
  <div class="page-wrap">
    <base-carousel :imgs="imgs"></base-carousel>
    <base-title :title-left="titleLeft"></base-title>
    <div class="content">
      <div class="course-wrap mb36">
        <div class="title">
          <span class="course-title">追光计划</span>
        </div>
        <table class="table-wrap" border>
          <colgroup>
            <col width="15%" />
            <col width="45%" />
            <col width="12%" />
            <col width="10%" />
            <col width="8%" />
          </colgroup>
          <tr>
            <th v-for="item in headList" :key="item">
              {{ item }}
            </th>
          </tr>

          <tr v-for="(item, index) in tabList1" :key="index">
            <td>{{ item.studyStage }}</td>
            <td>{{ item.teachingArrangement }}</td>
            <td>{{ item.teachingMethod }}</td>
            <td>{{ item.remark }}</td>
            <td>{{ item.telephone }}</td>
          </tr>
        </table>
      </div>
      <div class="course-wrap mb36">
        <div class="title">
          <span class="course-title">巅峰计划X</span>
        </div>
        <table class="table-wrap" border>
          <colgroup>
            <col width="15%" />
            <col width="45%" />
            <col width="12%" />
            <col width="10%" />
            <col width="8%" />
          </colgroup>
          <tr>
            <th v-for="item in headList" :key="item">
              {{ item }}
            </th>
          </tr>

          <tr v-for="(item, index) in tabList2" :key="index">
            <td>{{ item.studyStage }}</td>
            <td>{{ item.teachingArrangement }}</td>
            <td>{{ item.teachingMethod }}</td>
            <td>{{ item.remark }}</td>
            <td>{{ item.telephone }}</td>
          </tr>
        </table>
      </div>
      <div class="course-wrap mb36">
        <div class="title">
          <span class="course-title">蝶变计划A&B</span>
        </div>
        <table class="table-wrap" border>
          <colgroup>
            <col width="15%" />
            <col width="45%" />
            <col width="12%" />
            <col width="10%" />
            <col width="8%" />
          </colgroup>
          <tr>
            <th v-for="item in headList" :key="item">
              {{ item }}
            </th>
          </tr>

          <tr v-for="(item, index) in tabList3" :key="index">
            <td>{{ item.studyStage }}</td>
            <td>{{ item.teachingArrangement }}</td>
            <td>{{ item.teachingMethod }}</td>
            <td>{{ item.remark }}</td>
            <td>{{ item.telephone }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import baseCarousel from "@/components/baseCarousel";
import baseTitle from "@/components/baseTitle";
import { querySlideshow, queryTutorongClass } from "@/http";
export default {
  components: {
    baseCarousel,
    baseTitle,
  },
  data() {
    return {
      titleLeft: {
        title: "辅导课堂",
        enTitle: "Tutoring Class",
      },
      headList: ["学习阶段", "教学安排", "授课方式", "备注", "咨询报名"],
      agreementList: [
        {
          learningStage: "大一至大二学年",
          teachingArrangement: `1、掌握专升本政策考试信息，制定针对性的升本目标；\n
2、在校期间周末面授上课，全面掌握学科基础知识；\n
3、每学期英语三级/A级考前针对性辅导考试通关； \n 
4、寒假封闭面授上课半个月基础巩固； \n
5、暑期集中培训一个月强化巩固，并摸底考核；  \n
6、课外随时预约一对一个性化答疑； \n
7、网络课程全学年随时随地官网在线听课。`,
          teachingMethods: "面授",
          remarks: "无",
          consult: "0571-81955565",
        },
      ],
      imgs: [],
      tabList1: [],
      tabList2: [],
      tabList3: [],
    };
  },
  created() {
    this.queryListPic();
    this.tabChange1("追光计划");
    this.tabChange2("巅峰计划X");
    this.tabChange3("蝶变计划");
  },
  methods: {
    async queryListPic() {
      let res = await querySlideshow({});
      if (res.entry) {
        this.imgs = res.entry;
      }
    },
    async tabChange1(className) {
      this.type = className;
      let p = {
        page: 1,
        pageSize: 10,
        className,
      };
      let res = await queryTutorongClass(p);
      if (res.entry) {
        this.tabList1 = res.entry;
      } else {
        this.tabList1 = [];
      }
    },
    async tabChange2(className) {
      this.type = className;
      let p = {
        page: 1,
        pageSize: 10,
        className,
      };
      let res = await queryTutorongClass(p);
      if (res.entry) {
        this.tabList2 = res.entry;
      } else {
        this.tabList2 = [];
      }
    },
    async tabChange3(className) {
      this.type = className;
      let p = {
        page: 1,
        pageSize: 10,
        className,
      };
      let res = await queryTutorongClass(p);
      if (res.entry) {
        this.tabList3 = res.entry;
      } else {
        this.tabList3 = [];
      }
    },
  },
};
</script>
<style lang="less" scoped>
.mb20 {
  margin-bottom: mb20;
}
.mb24 {
  margin-bottom: 24px;
}
.mb32 {
  margin-bottom: 32px;
}
.mb36 {
  margin-bottom: 36px;
}
.page-wrap {
  .content {
    padding: 32px 64px;
    .title {
      margin-bottom: 24px;
      .course-title {
        display: inline-block;
        color: #757775;
        font-size: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #ee7435;
        font-family: SourceHanSansSC-regular;
      }
    }
    .table-wrap {
      table-layout: fixed;
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      border: 1px solid #bbb;
      text-align: center;
      th {
        color: rgba(83, 85, 83, 100);
        font-size: 16px;

        font-family: Microsoft Yahei;
        padding: 16px 0;
      }
      td {
        color: #757775;
        padding: 14px;
        white-space: pre-line;
      }
      tr {
        td:nth-child(2) {
          text-align: left;
        }
      }
    }
  }
}
</style>