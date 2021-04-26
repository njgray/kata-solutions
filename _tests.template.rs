#[cfg(test)]
// tested_function

mod tests {
    use super::tested_function;
    fn testing(n: u32, exp: u32) -> () {
        assert_eq!(tested_function(n), exp)
    }
    
    #[test]
    fn basics_tested_function() {
        testing(10, 22);
        testing(20, 57);
        testing(30, 91);
        testing(50, 175);
        testing(100, 447);
    }
}
