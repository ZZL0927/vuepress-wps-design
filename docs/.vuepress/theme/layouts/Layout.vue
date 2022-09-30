<template>
    <div class="body">
      <Header />
      <div class="content">
        <Sidebar class="sidebar" />
        <Content class="inner-content"/>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from "../components/Header"
  import Footer from "../components/Footer"
  import Sidebar from "../components/Sidebar"
  
  export default {
    components: {
      Header,
      Footer,
      Sidebar
    }
  };
  </script>
  <style scoped>
    .body {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .content {
        width: 100%;
        display: flex;
        flex: 1;
    }
    .inner-content {
        padding: 60px 150px;
        flex: 1;
    }
    .sidebar {
        box-sizing: border-box;
        width: 280px;
        padding: 20px;
        border-right: 1px solid #e5e8ef;
    }
  </style>