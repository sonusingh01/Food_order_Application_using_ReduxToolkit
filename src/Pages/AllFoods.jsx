import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  
} from "@mui/material";
import { Col } from "reactstrap";
import ReactPaginate from "react-paginate";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/products");
        console.log(data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setProducts(error);
      }
    };

    fetch();
  }, []);

  const [pageNumber, setPageNumber] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return 
    }
  });

  const productPerPage = 7;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", width: "120%" }}
    >
      <Col lg="6" md="6" sm="6" xs="12" >
        <div className="search__widget d-flex align-items-center justify-content-between " style={{width:"68rem", margin:"2rem"}}>
          <input  
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{padding:"1rem", width:"90rem" , borderRadius:"8px"}}
          />
          <span>
            <i className="ri-search-line"></i>
          </span>
        </div>
      </Col>
      {loading ? (
        <h2>Loading ....</h2>
      ) : (
        <Grid container spacing={3}>
          {displayPage.map((row) => (
            <Grid item xs={6} md={6} lg={3} key={row.id}>
              <Card className={"MuiElevatedCard--01"}>
                <CardHeader
                  className={"MuiCardHeader-root"}
                  classes={{
                    title: "MuiCardHeader-title",
                    subheader: "MuiCardHeader-subheader",
                  }}
                />
                <CardContent className={"MuiCardContent-root"}>
                  <Grid container spacing={2}>
                    <Grid item xs={8} sm={12}>
                      <Grid container>
                        <Grid container justify="space-evenly">
                          <img
                            src={row.image}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </Grid>

                        <Grid container>
                          <Grid container justify="space-evenly">
                            <label>{row.price}</label>
                          </Grid>
                          <Grid container justify="space-evenly">
                            {/* <label>{row.title}</label> */}
                          </Grid>
                        </Grid>

                        <Grid container justify="space-evenly">
                          <label>{row.title}</label>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="success"
                  style={{ margin: "auto" }}
                  className="mt-3"
                >
                  View
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "2px solid red ",
          justifyContent: "right",
          margin:"auto  ",
          fontSize:"15px"
        }}
      >
        <ReactPaginate
          style={{ display: "flex", flexDirection: "row" }}
          nextLabel="next "
          pageCount={pageCount}
          onPageChange={changePage}
          previousLabel=" previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </Container>
  );
};
export default Products;
