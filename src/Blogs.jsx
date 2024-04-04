import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Blogs() {
  const [bloglist, setbloglist] = useState([]);
  let getdata = async () => {
    try {
      const blogs = await axios.get(
        "https://660d1b103a0766e85dbf94e0.mockapi.io/api/data"
      );
      setbloglist(blogs.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800 align-items-center justify-content-between">
          Tables
        </h1>
        <p class="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>
        <Link
          to="/portal/blogcreate"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50 justify-content-between"></i>{" "}
          Create Blog
        </Link>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>title</th>
                    <th>content</th>
                    <th>age</th>
                    <th>password</th>
                  </tr>
                </thead>

                <tbody>
                  {bloglist.map((blog, index) => {
                    return (
                      <tr key={index}>
                        <td>{blog.title}</td>
                        <td>{blog.content}</td>
                        <td>{blog.age}</td>
                        <td>{blog.password}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
